module IncomingMessageHelper
  extend ActiveSupport::Concern

  class_methods do
    def incoming_messages(user)
      Message.find_by_username(user.username)
    end
  end
end