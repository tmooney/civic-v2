require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::BrowseSourceSuggestions < GraphQL::Schema::Resolver
  # include SearchObject for GraphQL
  include SearchObject.module(:graphql)

  type Types::Entities::SourceSuggestionType.connection_type, null: false

  scope { SourceSuggestion.eager_load(:source).all }

  option(:source_type, type: Types::SourceSourceType) do |scope, value|
    scope.eager_load(:source).where("sources.source_type = ?", Source.source_types[value])
  end

  option(:citation_id, type: Int) do |scope, value|
    scope.eager_load(:source).where('sources.citation_id::text LIKE ?', "#{value}%")
  end

  option(:source_id, type: Int) do |scope, value|
    scope.where(source_id: value)
  end

  option(:gene_name, type: String) do |scope, value|
    scope.where('source_suggestions.gene_name ILIKE ?', "#{value}%")
  end

  option(:variant_name, type: String) do |scope, value|
    scope.where('source_suggestions.variant_name ILIKE ?', "#{value}%")
  end

  option(:disease_name, type: String) do |scope, value|
    scope.where('source_suggestions.disease_name ILIKE ?', "%#{value}%")
  end

  option(:comment, type: String) do |scope, value|
    scope.where('source_suggestions.initial_comment ILIKE ?', "%#{value}%")
  end

  option(:submitter, type: String) do |scope, value|
    scope.eager_load(:user).where('users.username ILIKE ?', "#{value}%")
  end

  option(:citation, type: String) do |scope, value|
    scope.eager_load(:source).where('sources.description ILIKE ?', "%#{value}%")
  end

  option(:sort_by, type: Types::BrowseTables::SourceSuggestionsSortType) do |scope, value|
    case value.column
    when "SUBMITTER"
      scope.joins(:user).order("users.username #{value.direction}")
    when "SOURCE_TYPE"
      scope.joins(:source).order("sources.source_type #{value.direction}")
    when "CITATION_ID"
      scope.joins(:source).order("sources.citation_id #{value.direction}")
    when "CITATION"
      scope.joins(:source).order("sources.description #{value.direction}")
    when "GENE_NAME"
      scope.order("gene_name #{value.direction}")
    when "VARIANT_NAME"
      scope.order("variant_name #{value.direction}")
    when "DISEASE_NAME"
      scope.order("disease_name #{value.direction}")
    end
  end
end

