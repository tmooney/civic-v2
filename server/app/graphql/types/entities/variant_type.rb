module Types::Entities
  class VariantType < Types::BaseObject
    field :id, Int, null: false
    field :name, String, null: false
    field :description, String, null: false
    field :gene, Types::Entities::GeneType, null: false
    field :evidence_items, [Types::Entities::EvidenceItemType], null: true

    def gene
      Loaders::RecordLoader.for(Gene).load(object.gene_id)
    end

    def evidence_items
      Loaders::AssociationLoader.for(Variant, :evidence_items).load(object)
    end
  end
end
