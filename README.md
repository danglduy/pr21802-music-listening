Team3: Duy, Tuyen

------------

## Deploy
- Clone project
- Install: Ruby 2.5.1, Mysql, NodeJs >= 8, Yarn
- Install prerequisites by following commands

```
bundle install
gem install foreman
yarn
```
- Copy .env.template to .env, replacing email information
- Copy config/databases.yml.template to config/database.yml, replace your database information
- `rails db:create`, `rails db:migrate`
- Start the server by start.sh: `./start.sh`
