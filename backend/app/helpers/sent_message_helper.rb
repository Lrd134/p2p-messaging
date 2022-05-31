module SentMessageHelper
  extend ActiveSupport::Concern

  class_methods do
    def sent_messages(user)
      Message.where(
        'id == ?',
        user.id)
    end
  end
end