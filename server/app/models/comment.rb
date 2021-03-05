class Comment < ActiveRecord::Base
  ##include WithTimepointCounts
  ##before_destroy :mark_events_unlinkable

  belongs_to :user
  belongs_to :commentable, ->() { unscope(where: :deleted) }, polymorphic: true

  default_scope -> { order('created_at ASC') }

  alias_attribute :text, :comment

  private
  def mark_events_unlinkable
    if self.commentable.respond_to?(:events)
      unlinkable_events = self.commentable.events.where(action: 'commented')
        .select { |e| e.state_params['comment'] && e.state_params['comment']['id'] == self.id }
      unlinkable_events.each do |e|
        e.unlinkable = true
        e.save
      end
    end
  end

  def self.timepoint_query
    ->(x) {
      Event.where(action: 'commented')
        .where('events.created_at >= ?', x)
        .distinct
    }
  end
end
