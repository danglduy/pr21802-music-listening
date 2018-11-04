class DtMailer < ActionMailer::Base
  default from: "D&T Music <awesome.academy.test@gmail.com>"

  def new_user user
    @user = user
    mail to: @user.email, subject: t(".welcome_to")
  end
end
