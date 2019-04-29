source "https://rubygems.org"
git_source(:github){|repo| "https://github.com/#{repo}.git"}

ruby "2.5.1"

gem "activeadmin", "1.3.1"
gem "bcrypt", "~> 3.1.7"
gem "best_in_place", "~> 3.1", ">= 3.1.1"
gem "bootsnap", ">= 1.1.0", require: false
gem "cancancan", "~> 2.3"
gem "carrierwave", "~> 1.2", ">= 1.2.3"
gem "config", "~> 1.7"
gem "ckeditor", "~> 4.3"
gem "devise", "~> 4.5"
gem "dotenv-rails", "~> 2.5"
gem "fog", "~> 2.1.0"
gem "font-awesome-rails"
gem "font-awesome-sass"
gem "jbuilder", "~> 2.5"
gem "jquery-rails", "~> 4.3", ">= 4.3.3"
gem "materialize-sass", "~> 1.0"
gem "mini_magick", "~> 4.9", ">= 4.9.2"
gem "mysql2", ">= 0.4.4", "< 0.6.0"
gem "omniauth", "~> 1.8", ">= 1.8.1"
gem "omniauth-facebook", "~> 5.0.0"
gem "omniauth-google-oauth2", "~> 0.5.3"
gem "omniauth-twitter", "~> 1.4.0"
gem "paperclip", "~> 6.0.0"
gem "paranoia", "~> 2.4", ">= 2.4.1"
gem "rails", "~> 5.2.1"
gem "rails-i18n", "~> 5.1", ">= 5.1.1"
gem "ransack", "~> 2.1"
gem "recaptcha"
gem "rolify", "~> 5.2"
gem "rubocop", "~> 0.54.0", require: false
gem "sass-rails", "~> 5.0"
gem "streamio-ffmpeg", "~> 3.0", ">= 3.0.2"
gem "stripe", "~> 3.28"
gem "toastr-rails"
gem "turbolinks", "~> 5"
gem "uglifier", ">= 1.3.0"
gem "webpacker", "~> 3.5", ">= 3.5.5"
gem "yajl-ruby", require: "yajl"

group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "puma", "~> 3.11"
  gem "rspec-rails", "~> 3.8"
end

group :development do
  gem "capistrano", "~> 3.11"
  gem "capistrano-bundler", "~> 1.4"
  gem "capistrano-env-config", "~> 0.3.0"
  gem "capistrano-passenger", "~> 0.2.0"
  gem "capistrano-rails", "~> 1.4"
  gem "capistrano-rbenv", "~> 2.1", ">= 2.1.4"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "web-console", ">= 3.3.0"
end

group :test do
  gem "capybara", "~> 3.6"
  gem "database_cleaner", "~> 1.7"
  gem "email_spec", "~> 2.2"
  gem "factory_bot_rails", "~> 4.11"
  gem "guard-rspec", "~> 4.7", ">= 4.7.3"
  gem "rails-controller-testing"
  gem "rb-fsevent", "~> 0.10.3", require: false
  gem "rb-inotify", "~> 0.9.10", require: false
  gem "shoulda-matchers", "~> 4.0.0.rc1"
end

group :production do
  gem "passenger", "~> 5.3", ">= 5.3.5"
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
