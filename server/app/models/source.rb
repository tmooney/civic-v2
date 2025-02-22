class Source < ActiveRecord::Base
  include ModeratedField
  include Subscribable
  include WithTimepointCounts

  has_many :evidence_items
  has_and_belongs_to_many :genes
  has_and_belongs_to_many :clinical_trials
  has_many :authors_sources
  has_many :authors, through: :authors_sources
  has_many :variant_groups

  enum source_type: ['PubMed', 'ASCO']

  def name
    display_name
  end

  def citation
    description
  end

  def source_url
    Source.url_for(source: self)
  end

  def display_name
    "#{self.display_type}: #{self.citation}"
  end

  def link
    Rails.application.routes.url_helpers.url_for("/sources/#{self.id}")
  end

  def display_type
    "#{self.source_type}"
  end

  def author_string
    if source_type == 'PubMed'
      authors = authors_sources.reload.reject { |as| as.fore_name.blank? && as.last_name.blank? }.sort_by{ |as| as.author_position }.map do |as|
        "#{as.fore_name} #{as.last_name}"
      end
      authors.join(', ')
    elsif source_type == 'ASCO'
      asco_presenter
    end
  end

  def self.url_for(source:)
    if source.source_type == 'PubMed'
      "http://www.ncbi.nlm.nih.gov/pubmed/#{source.citation_id}"
    elsif source.source_type == 'ASCO'
      "https://meetinglibrary.asco.org/record/#{source.citation_id}/abstract"
    end
  end

    def self.timepoint_query
      ->(x) {
        self.joins(:evidence_items)
          .group('sources.id')
          .select('sources.id')
          .where("evidence_items.status != 'rejected'")
          .distinct
          .having('MIN(evidence_items.created_at) >= ?', x)
          .count
      }
    end
end
