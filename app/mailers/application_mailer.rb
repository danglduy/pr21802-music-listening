class ApplicationMailer < ActionMailer::Base
  default from: ENV["email_from"]
  layout "mailer"
end
