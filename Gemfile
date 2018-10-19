source "https://rubygems.org"
git_source(:github){|repo| "https://github.com/#{repo}.git"}

ruby "2.5.1"

gem "bcrypt", "~> 3.1.7"
gem "bootsnap", ">= 1.1.0", require: false
gem "config", "~> 1.7"
gem "devise"
gem "jbuilder", "~> 2.5"
gem "jquery-rails"
gem "materialize-sass"
gem "mysql2", ">= 0.4.4", "< 0.6.0"
gem "puma", "~> 3.11"
gem "rails", "~> 5.2.1"
gem "rubocop", "~> 0.54.0", require: false
gem "sass-rails", "~> 5.0"
gem "turbolinks", "~> 5"
gem "uglifier", ">= 1.3.0"
gem "webpacker", "~> 3.5", ">= 3.5.5"

group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "dotenv-rails", "~> 2.5"
  gem "rspec-rails", "~> 3.8"
end

group :development do
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
  gem "rb-fsevent", "~> 0.10.3", require: false
  gem "rb-inotify", "~> 0.9.10", require: false
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
