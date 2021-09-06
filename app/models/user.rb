# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  # user created events
  has_many :organized_events,
  primary_key: :id,
  foreign_key: :organizer_id,
  class_name: :Event

  has_many :tickets
  has_many :bookmarks

  has_many :ticketed_events,
  through: :tickets,
  source: :event

  has_many :bookmarked_events,
  through: :bookmarks,
  source: :event

  after_initialize :ensure_session_token
  # before_validation :ensure_session_token_uniqueness

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password)
    nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    # ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  # def ensure_session_token_uniqueness
  #   while User.find_by(session_token: self.session_token)
  #     self.session_token = User.generate_session_token
  #   end
  # end

end
