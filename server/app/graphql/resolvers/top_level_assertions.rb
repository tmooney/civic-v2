require 'search_object/plugin/graphql'

class Resolvers::TopLevelAssertions < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::AssertionType.connection_type, null: false

  description 'List and filter assertions.'

  scope {
    Assertion
      .order("evidence_items_count DESC")
      .where("assertions.status != 'rejected'")
  }

  option(:id, type: GraphQL::Types::Int, description: 'Exact match filtering on the ID of the assertion.') do |scope, value|
    scope.where("assertions.id = ?", value)
  end
  option(:variant_id, type: GraphQL::Types::Int, description: 'Exact match filtering on the ID of the variant.') do |scope, value|
    scope.where("assertions.variant_id = ?", value)
  end
  option(:evidence_id, type: GraphQL::Types::Int, description: 'Exact match filtering on the ID of evidence underlying the assertion.') do |scope, value|
    scope.joins(:evidence_items).where('evidence_items.id = ?', value)
  end
  option(:organization_id, type: GraphQL::Types::Int, description: 'Exact match filtering on the ID of the organization the assertion was submitted under.') do  |scope, value|
    scope.joins(:submission_event).where('events.organization_id = ?', value)
  end
  option(:user_id, type: GraphQL::Types::Int, description: 'Exact match filtering on the ID of the user who submitted the assertion.') do |scope, value|
    scope.joins(:submission_event).where('events.originating_user_id = ?', value)
  end
  option(:disease_name, type: GraphQL::Types::String, description: 'Substring filtering on disease name.') do |scope, value|
    scope.joins(:disease).where('diseases.name ILIKE ?', "%#{value}%")
  end
  option(:drug_name, type: GraphQL::Types::String, description: 'Substring filtering on drug name.') do |scope, value|
    scope.joins(:drugs).where('drugs.name ILIKE ?', "%#{value}%")
  end
  option(:gene_name, type: GraphQL::Types::String, description: 'Substring filtering on gene name.') do |scope, value|
    scope.joins(:gene).where('genes.name ILIKE ?', "%#{value}%")
  end
  option(:variant_name, type: GraphQL::Types::String, description: 'Substring filtering on variant name.') do |scope, value|
    scope.joins(:variant).where('variants.name ILIKE ?', "%#{value}%")
  end
  option(:summary, type: GraphQL::Types::String, description: 'Substring filtering on assertion description.') do |scope, value|
    scope.where("assertions.summary ILIKE ?", "%#{value}%")
  end
  option(:assertion_type, type: Types::EvidenceTypeType, description: 'Filtering on the assertion type.') do |scope, value|
    scope.where(evidence_type: value)
  end
  option(:assertion_direction, type: Types::EvidenceDirectionType, description: 'Filtering on the assertion direction.') do |scope, value|
    scope.where(evidence_direction: value)
  end
  option(:clinical_significance, type: Types::EvidenceClinicalSignificanceType, description: "Filtering on the assertion's clinical significance.") do |scope, value|
    scope.where(clinical_significance: value)
  end
  option(:amp_level, type: Types::AmpLevelType, description: 'Filtering on the AMP/ASCO/CAP category.') do |scope, value|
    scope.where(amp_level: value)
  end
  option(:phenotype_id, type: GraphQL::Types::Int, description: 'Exact match filtering of the assertions based on the internal CIViC phenotype id') do |scope, value|
    scope.joins(:phenotypes).where('phenotypes.id = ?', value)
  end
  option(:disease_id, type: GraphQL::Types::Int, description: 'Exact match filtering of the assertions based on the internal CIViC disease id') do |scope, value|
    scope.joins(:disease).where('diseases.id = ?', value)
  end
  option(:drug_id, type: GraphQL::Types::Int, description: 'Exact match filtering of the assertions based on the internal CIViC drug id') do |scope, value|
    scope.joins(:drugs).where('drugs.id = ?', value)
  end
  option(:status, type: Types::EvidenceStatusType, description: "Filtering on the status of the assertion.") do |scope, value|
    scope.unscope(where: :status).where(status: value)
  end


  option :sort_by, type: Types::BrowseTables::AssertionSortType, description: 'Columm and direction to sort evidence on.' do |scope, value|
    case value.column
    when 'ID'
      scope.reorder("assertions.id #{value.direction}")
    when 'GENE_NAME'
      scope.joins(:gene).reorder("genes.name #{value.direction}")
    when 'VARIANT_NAME'
      scope.joins(:variant).reorder("variants.name #{value.direction}")
    when 'DISEASE_NAME'
      scope.joins(:disease).reorder("diseases.name #{value.direction}")
    when 'DRUG_NAME'
      scope.joins(:drugs).reorder("drugs.name #{value.direction}")
    when 'SUMMARY'
      scope.reorder("assertions.summary #{value.direction}")
    when 'ASSERTION_TYPE'
      scope.reorder("evidence_type #{value.direction}")
    when 'STATUS'
      scope.reorder("status #{value.direction}")
    when 'ASSERTION_DIRECTION'
      scope.reorder("evidence_direction #{value.direction}")
    when 'CLINICAL_SIGNIFICANCE'
      scope.reorder("clinical_significance #{value.direction}")
    when 'AMP_LEVEL'
      scope.reorder("amp_level #{value.direction}")
    when 'EVIDENCE_ITEMS_COUNT'
      scope.reorder("evidence_items_count #{value.direction}")
    end
  end
end
