class Gene < ActiveRecord::Base
  include Moderated

  has_many :variants
  has_many :assertions
  has_and_belongs_to_many :sources
  has_and_belongs_to_many :gene_aliases

  def diseases
    self.variants.flat_map{|v| v.evidence_items.flat_map{|e| e.disease}}.compact.uniq
  end

  def drugs
    self.variants.flat_map{|v| v.evidence_items.flat_map{|e| e.drugs}}.compact.uniq
  end

  def variant_count
    self.variants.length
  end

  def evidence_item_count
    self.variants.flat_map{|v| v.evidence_items}.length
  end

  def assertion_count
    self.assertions.length
  end
end
