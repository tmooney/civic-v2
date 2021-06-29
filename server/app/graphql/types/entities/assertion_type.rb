module Types::Entities
  class AssertionType < Types::BaseObject

    implements Types::Interfaces::Commentable
    implements Types::Interfaces::Flaggable
    implements Types::Interfaces::WithRevisions
    implements Types::Interfaces::EventSubject

    field :id, Int, null: false
    field :name, String, null: false
    field :variant, Types::Entities::VariantType, null: false
    field :gene, Types::Entities::GeneType, null: false
    field :clinical_significance, Types::EvidenceClinicalSignificanceType, null: false
    field :summary, String, null: false
    field :description, String, null: false
    field :disease, Types::Entities::DiseaseType, null: true
    field :drugs, [Types::Entities::DrugType], null: true
    field :drug_interaction_type, Types::DrugInteractionType, null: true
    field :assertion_direction, Types::EvidenceDirectionType, null: false
    field :assertion_type, Types::EvidenceTypeType, null: false
    field :phenotypes, [Types::Entities::PhenotypeType], null: true
    field :source, Types::Entities::SourceType, null: false
    field :status, Types::EvidenceStatusType, null: false
    field :variant_origin, Types::VariantOriginType, null: false
    field :regulatory_approval, GraphQL::Types::Boolean, null: true
    field :fda_companion_test, GraphQL::Types::Boolean, null: true
    field :nccn_guideline, String, null: true
    field :acmg_codes, [Types::Entities::AcmgCodeType], null: true
    field :amp_level, Types::AmpLevelType, null: true

    def disease
      Loaders::RecordLoader.for(Disease).load(object.disease_id)
    end

    def drugs
      Loaders::AssociationLoader.for(Assertion, :drugs).load(object)
    end

    def phenotypes
      Loaders::AssociationLoader.for(Assertion, :phenotypes).load(object)
    end

    def acmg_codes
      Loaders::AssociationLoader.for(Assertion, :acmg_codes).load(object)
    end

    def source
      Loaders::RecordLoader.for(Source).load(object.source_id)
    end

    def variant
      Loaders::RecordLoader.for(Variant).load(object.variant_id)
    end

    def gene
      Loaders::RecordLoader.for(Gene).load(object.gene_id)
    end

    def assertion_direction
      object.evidence_direction
    end

    def assertion_type
      object.evidence_type
    end

    def regulatory_approval
      object.fda_regulatory_approval
    end

    def nccn_guideline
      if object.nccn_guideline
        object.nccn_guideline.name
      else
        nil
      end
    end
  end
end
