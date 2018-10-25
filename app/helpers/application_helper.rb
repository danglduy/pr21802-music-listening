module ApplicationHelper
  def full_title page_title = ""
    base_title = t "base_title"
    base_title = page_title + "|" + base_title if page_title.present?
    base_title
  end

  def avatar_url user
    gravatar_id = Digest::MD5::hexdigest(user.email).downcase
    "https://www.gravatar.com/avatar/#{gravatar_id}.jpg?d=identicon&s=350"
  end

  def flash_class level
    case level
    when "success" then "ui green message"
    when "alert" then "ui red message"
    when "error" then "ui red message"
    when "notice" then "ui blue message"
    end
  end
end
