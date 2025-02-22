module Types::Interfaces
  module Flaggable
    include Types::BaseInterface

    description 'A CIViC entity that can be flagged for editor attention.'

    field :id, Int, null: false
    field :name, String, null: false
    field :link, String, null: false

    field :flagged, GraphQL::Types::Boolean, null: false
    field :flags, resolver: Resolvers::Flags

    definition_methods do
      def resolve_type(object, context)
        case object
        when Gene
          Types::Entities::GeneType
        when Variant
          Types::Entities::VariantType
        when EvidenceItem
          Types::Entities::EvidenceItemType
        when Assertion
          Types::Entities::AssertionType
        when VariantGroup
          Types::Entities::VariantGroupType
        else
          raise "Unexpected Flaggable type: #{object.class}"
        end
      end
    end

    def flags
      Loaders::AssociationLoader.for(@object.class, :flags).load(object)
    end
  end
end
