module Types::Entities
  class UserType < Types::BaseObject
    field :id, Int, null: false
    field :name, String, null: false
    field :url, String, null: true
    field :username, String, null: false
    field :role, String, null: false #TODO this needs to be an enum
    field :bio, String, null: true
    field :country, String, null: true #this needs to be an enum
    field :organizations, [Types::Entities::OrganizationType], null: true
    field :events, Types::Entities::EventType.connection_type, null: false

    field :email, String, null: true do
      def authorized?(object, args, context)
        object.id == context[:current_user]&.id
      end
    end

    field :notifications, Types::Entities::NotificationType.connection_type, null: true do
      description 'Filterable list of notifications for the logged in user.'
      type_desc = 'Filter the response to include only notifications of a certaint type (ex: mentions).'
      sub_desc = 'Filter the reponse to include only notifications generated by a particular subscription.'
      event_desc = 'Filter the response to include only notifications generated by certain actions (ex: commenting).'

      #TODO this should be the same enum we make in notification_type.rb
      argument :notification_type, String, required: false, description: type_desc
      #TODO this should be the same enum we make in event_type.rb
      argument :event_type, Types::Entities::Event::EventActionType, required: false, description: event_desc
      argument :subscription_id, Int, required: false, description: sub_desc
      argument :include_seen, Boolean, required: false, default_value: false, description: sub_desc

      def authorized?(object, args, context)
        object.id == context[:current_user]&.id
      end
    end

    def organizations
      Loaders::AssociationLoader.for(User, :organizations).load(object)
    end

    def notifications(notification_type: nil, subscription_id: nil, event_type: nil, include_seen:)
      #TODO - implement filters
      Loaders::AssociationLoader.for(User, :notifications).load(object)
    end

    def events
      Loaders::AssociationLoader.for(User, :events).load(object)
    end
  end
end
