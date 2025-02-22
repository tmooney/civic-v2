module Types::Popovers
  class DrugPopoverType < Types::Entities::DrugType
    field :assertion_count, Int, null: false
    field :evidence_item_count, Int, null: false

    def assertion_count
      Drug.where(id: object.id)
        .joins(:assertions)
        .select('assertions.id')
        .where("assertions.status != 'rejected'")
        .distinct
        .count
    end

    def evidence_item_count
      Drug.where(id: object.id)
        .joins(:evidence_items)
        .where("evidence_items.status != 'rejected'")
        .select('evidence_items.id')
        .distinct
        .count
    end
  end
end

