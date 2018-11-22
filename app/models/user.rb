class User < ApplicationRecord
  acts_as_token_authenticatable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :validatable,
    :confirmable, :lockable, :timeoutable, :omniauthable

  rolify

  has_many :user_artists, dependent: :destroy
  has_many :artists, through: :user_artists
  has_many :likes, dependent: :destroy
  has_many :songs, through: :likes
  has_many :playlists, dependent: :destroy
  has_many :payments, dependent: :destroy
  has_many :subscriptions, dependent: :destroy

  acts_as_paranoid
  after_create :send_welcome_email

  # has_one_time_password
  # enum otp_module: {disabled: 0, enabled: 1}, _prefix: true
  # attr_accessor :otp_code_token

  validates_presence_of :name

  validates_length_of :name,
    minimum: Settings.user.name.length.minimum,
    allow_blank: true

  validates_length_of :name,
    maximum: Settings.user.name.length.maximum,
    allow_blank: true

  class << self
    def valid_login? email, password
      user = User.find_for_authentication email: email
      return unless user.valid_password? password
      user.reset_authentication_token! unless user.authentication_token
      [true, user]
    end

    def find_for_google_oauth2 provider, uid, name, email,
      _signed_in_resource = nil
      user = User.where(provider: provider, uid: uid).first

      if user
        return user
      else
        registered_user = User.where(email: email).first
        if registered_user
          return registered_user
        else
          user = User.new(
            name: name,
            provider: provider,
            email: email,
            uid: uid,
            password: Devise.friendly_token[0, 20]
          )
          user.skip_confirmation!
          user.skip_confirmation_notification!
          user.save
          return user
        end
      end
    end

    def find_for_facebook_oauth provider, uid, name, email,
      _signed_in_resource = nil
      user = User.where(provider: provider, uid: uid).first

      if user
        return user
      else
        registered_user = User.where(email: email).first
        if registered_user
          return registered_user
        else
          user = User.new(
            name: name,
            provider: provider,
            email: email,
            uid: uid,
            password: Devise.friendly_token[0, 20]
          )
          user.skip_confirmation!
          user.skip_confirmation_notification!
          user.save
          return user
        end
      end
    end

    def find_for_twitter_oauth provider, uid, name, email,
      _signed_in_resource = nil
      user = User.where(provider: provider, uid: uid).first

      if user
        return user
      else
        registered_user = User.where(email: email).first
        if registered_user
          return registered_user
        else
          user = User.new(
            name: name,
            provider: provider,
            email: email,
            uid: uid,
            password: Devise.friendly_token[0, 20]
          )
          user.skip_confirmation!
          user.skip_confirmation_notification!
          user.save
          return user
        end
      end
    end
  end

  def subscribed?
    subscriptions.not_expired.count.positive?
  end

  # Sends welcome email.
  def send_welcome_email
    DtMailer.new_user(self).deliver
  end

  def reset_authentication_token!
    update authentication_token: Devise.friendly_token
  end
end
