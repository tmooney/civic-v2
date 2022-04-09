class Drug < ApplicationRecord
  include WithTimepointCounts
  include WithCapitalizedName

  has_and_belongs_to_many :evidence_items
  has_and_belongs_to_many :assertions
  has_and_belongs_to_many :drug_aliases

  def self.url_for(ncit_id:)
    if ncit_id.nil?
      nil
    else
      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&ns=ncit&code=#{ncit_id}"
    end
  end

  def link
    Rails.application.routes.url_helpers.url_for("/drugs/#{self.id}")
  end

  def self.timepoint_query
    ->(x) {
      self.joins(:evidence_items)
        .group('drugs.id')
        .select('drugs.id')
        .where("evidence_items.status != 'rejected'")
        .having('MIN(evidence_items.created_at) >= ?', x)
        .distinct
        .count
    }
  end
end
