module Types::Entities
  class CommentType < Types::BaseObject
    field :id, Int, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :title, String, null: true
    field :comment, String, null: false
    field :commenter, Types::Entities::UserType, null: false
    field :creation_event, Types::Entities::EventType, null: true

    def commenter
      Loaders::AssociationLoader.for(Comment, :user).load(object)
    end

    def creation_event
      Loaders::AssociationLoader.for(Comment, :creation_event).load(object)
    end
  end
end
