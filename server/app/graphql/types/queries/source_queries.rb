module Types::Queries
  module SourceQueries
    def self.included(klass)
      klass.field :source_existence, String, null: true do
        description 'Check to see if a citation ID for a source not already in CIViC exists in an external database.'
        argument :citation_id, GraphQL::Types::Int, required: true
        #TODO - rename this or move to a module so its less silly of a typename
        argument :source_type, Types::SourceSourceType, required: true
      end

      klass.field :source_typeahead, [Types::Entities::SourceType], null: false do
        description 'Provide suggestions for sources based on a partial citation ID'
        argument :citation_id, GraphQL::Types::Int, required: true
        argument :source_type, Types::SourceSourceType, required: true
      end

      def source_existence(citation_id:, source_type:)
      end

      def source_typeahead(citation_id:, source_type:)
        Source.where(source_type: source_type)
          .where('sources.citation_id LIKE ?', "#{citation_id}%")
          .limit(10)
      end
    end
  end
end
