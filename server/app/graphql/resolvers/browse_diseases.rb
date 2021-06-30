require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::BrowseDiseases < GraphQL::Schema::Resolver
  # include SearchObject for GraphQL
  include SearchObject.module(:graphql)

  type Types::BrowseTables::BrowseDiseaseType.connection_type, null: false

  scope { DiseaseBrowseTableRow.all }

  option(:name, type: String) do |scope, value|
    scope.where('name ILIKE ?', "%#{value}%")
  end

  option(:doid, type: String) do |scope, value|
    scope.where('doid ILIKE ?', "%#{value}")
  end

  option(:gene_names, type: String) do |scope, value|
    scope.where("array_to_string(gene_names, '|') ILIKE ?", "%#{value}%")
  end


  option(:sort_by, type: Types::BrowseTables::DiseasesSortType) do |scope, value|
    case value.column
    when "NAME"
      scope.order("name #{value.direction}")
    when "DOID"
      scope.order("doid #{value.direction}")
    when "VARIANT_COUNT"
      scope.order("variant_count #{value.direction}")
    when "EVIDENCE_ITEM_COUNT"
      scope.order("evidence_item_count #{value.direction}")
    when "ASSERTION_COUNT"
      scope.order("evidence_item_count #{value.direction}")
    when "GENE_NAMES"
      scope.order("gene_names #{value.direction}")
    end
  end
end

