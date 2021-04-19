Trestle.resource(:genes) do
  collection do
    Gene.includes(:flags).order(name: :asc)
  end

  search do |q|
    q ? collection.where("genes.name ILIKE ?", "#{q}%") : collection
  end

  remove_action :destroy
  remove_action :new

  menu do
    item :genes, icon: "fa fa-align-center" #TODO: see if we can use our custom icons here
  end

  scope :all
  scope :with_variants, -> { Gene.joins(:variants).distinct }, default: true
  scope :flagged, -> { Gene.where(flagged: true) }

  # Customize the table columns shown on the index view.
  table do
    column :id
    column :entrez_id
    column :name
    column :official_name
    column :flagged
  end

  # Customize the form fields shown on the new/edit views.
  form do |gene|
    tab :gene do
      row do
        col(sm: 1) { static_field :id }
        col(sm: 1) { static_field :entrez_id }
        col(sm: 1) { static_field :name }
        col(sm: 8) { static_field :official_name }
        if gene.flagged
          col do
            static_field :flagged do
              status_tag(icon("fa fa-flag"), :danger)
            end
          end
        end
      end
      text_area :description
      select :source_ids, Source.order(:description), { label: "Sources" }, multiple: true

      divider

      row do
        col(sm: 6) { datetime_field :created_at, readonly: true }
        col(sm: 6) { datetime_field :updated_at, readonly: true }
      end
    end

    tab :comments, badge: gene.comments.size do
      table gene.comments do
        column :id do |comment|
          link_to comment.id, CommentsAdmin.instance_path(comment)
        end
        column :title
        column :comment
        column :user do |comment|
          comment.user.username
        end
      end
    end

    tab :flags, badge: gene.flags.where(state: 'open').exists? do
      table gene.flags do
        column :id do |flag|
          link_to flag.id, FlagsAdmin.instance_path(flag)
        end
        column :flagging_user do |flag|
          flag.flagging_user.username
        end
        column :state
        column :resolving_user do |flag|
          flag.resolving_user&.username
        end
      end
    end

    tab :revisions, badge: gene.revisions.where(status: 'new').exists? do
      table gene.revisions do
        column :id do |revision|
          link_to revision.id, RevisionsAdmin.instance_path(revision)
        end
        column :field_name
        column :current_value
        column :suggested_value
        column :revisionset_id
        column :status
        column :revisor do |revision|
          revision.revisor.username
        end
      end
    end

  end

  # By default, all parameters passed to the update and create actions will be
  # permitted. If you do not have full trust in your users, you should explicitly
  # define the list of permitted parameters.
  #
  # For further information, see the Rails documentation on Strong Parameters:
  #   http://guides.rubyonrails.org/action_controller_overview.html#strong-parameters
  #
  # params do |params|
  #   params.require(:gene).permit(:name, ...)
  # end
end
