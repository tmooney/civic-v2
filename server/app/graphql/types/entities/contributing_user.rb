module Types::Entities
  class ContributingUser < Types::BaseObject
    description "A user with all the unique kinds of actions they've performed on a given entity"

    field :user, Types::Entities::UserType, null: false
    field :unique_actions, [Types::Events::EventActionType], null: false
    field :last_action_date, GraphQL::Types::ISO8601DateTime, null: false
  end
end
