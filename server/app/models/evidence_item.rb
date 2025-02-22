class EvidenceItem < ActiveRecord::Base
  validates_with EvidenceItemValidator

  include Subscribable
  include Commentable
  include Flaggable
  include Moderated
  include WithTimepointCounts

  belongs_to :variant
  belongs_to :disease, optional: true
  belongs_to :source
  has_and_belongs_to_many :drugs
  has_and_belongs_to_many :phenotypes
  has_and_belongs_to_many :assertions
  has_many :comment_mentions, foreign_key: :comment_id, class_name: 'EntityMention'

  enum evidence_type: Constants::EVIDENCE_TYPES
  enum evidence_level: Constants::EVIDENCE_LEVELS
  enum evidence_direction: Constants::EVIDENCE_DIRECTIONS, _suffix: true
  #TODO make this an enum:
  #enum evidence_status: Constants::EVIDENCE_STATUS
  enum variant_origin: Constants::VARIANT_ORIGINS, _suffix: true
  enum clinical_significance: Constants::CLINICAL_SIGNIFICANCES
  enum drug_interaction_type: Constants::DRUG_INTERACTION_TYPES

  has_one :submission_event,
    ->() { where(action: 'submitted').includes(:originating_user) },
    as: :subject,
    class_name: 'Event'
  has_one :submitter, through: :submission_event, source: :originating_user
  has_one :acceptance_event,
    ->() { where(action: 'accepted').includes(:originating_user) },
    as: :subject,
    class_name: 'Event'
  has_one :acceptor, through: :acceptance_event, source: :originating_user
  has_one :rejection_event,
    ->() { where(action: 'rejected').includes(:originating_user) },
    as: :subject,
    class_name: 'Event'
  has_one :rejector, through: :rejection_event, source: :originating_user

  validates :rating, inclusion: [1, 2, 3, 4, 5]


  searchkick highlight: [:id], callbacks: :async

  def search_data
    {
      id: name
    }
  end

  def name
    "EID#{self.id}"
  end

  def display_name
    self.name
  end

  def link
    Rails.application.routes.url_helpers.url_for("/evidence/#{self.id}")
  end

  def gene
    self.variant.gene
  end

  def self.timepoint_query
    ->(x) {
      self.where("evidence_items.status != 'rejected'")
        .where('evidence_items.created_at >= ?', x)
        .distinct
    }
  end

end
