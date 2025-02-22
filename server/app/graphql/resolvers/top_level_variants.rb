require 'search_object/plugin/graphql'

class Resolvers::TopLevelVariants < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::VariantType.connection_type, null: false

  description 'List and filter variants.'

  scope { Variant.order('variants.name ASC').distinct }

  option(:evidence_status_filter, default_value: 'WITH_ACCEPTED_OR_SUBMITTED', type: Types::VariantDisplayFilterType , description: 'Limit variants by the status of attached evidence.') do |scope, value|
    case value
    when 'WITH_ACCEPTED'
      scope.joins(:evidence_items_by_status)
        .where('evidence_items_by_statuses.accepted_count >= 1')
    when 'WITH_ACCEPTED_OR_SUBMITTED'
      scope.joins(:evidence_items_by_status)
        .where('evidence_items_by_statuses.accepted_count >= 1 OR evidence_items_by_statuses.submitted_count >= 1')
    when 'WITH_SUBMITTED'
      scope.joins(:evidence_items_by_status)
        .where('evidence_items_by_statuses.submitted_count >= 1')
    when 'ALL'
      scope
    end
  end

  option(:name, type: GraphQL::Types::String, description: 'Left anchored filtering for variant name and aliases.') do |scope, value|
    scope.left_joins(:variant_aliases)
      .where('variants.name ILIKE :query OR variant_aliases.name ILIKE :query', { query: "%#{value}%" })
  end

  option(:gene_id, type: GraphQL::Types::Int, description: 'Gene that variants are associated with.') do |scope, value|
    scope.where(gene_id: value)
  end

  option :sort_by, type: Types::VariantMenuSortType do |scope, value|
    case value.column
    when 'NAME'
      scope.reorder("variants.name #{value.direction}")
    when 'COORDINATE_START'
      scope.reorder("variants.start #{value.direction} NULLS LAST")
    when 'COORDINATE_END'
      scope.reorder("variants.stop #{value.direction} NULLS LAST")
    end
  end
end
