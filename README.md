Team3: Duy, Tuyen

------------

## Deploy
- Clone project
- Install: Ruby 2.5.1, Mysql, NodeJs >= 8
- Prerequisites: ffmpeg, yarn, foreman(gem)
- Install prerequisites by following commands

```
sudo apt-get install ffmpeg
bundle install
gem install foreman
yarn
```
- Copy .env.template to .env, replacing email information
- Copy config/databases.yml.template to config/database.yml, replace your database information
- `rails db:create`, `rails db:migrate`
- Start the server by start.sh: `./start.sh`
