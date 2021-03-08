module Types::Revisions
  class GeneFields < Types::BaseInputObject
    argument :description, String, required: true
    argument :source_ids, [Int], required: true
  end
end

