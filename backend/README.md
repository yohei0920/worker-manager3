## 開発コマンド

### DBのリセットと作成

~~~~~~~~~
docker-compose run backend rails db:drop
docker-compose run backend rails db:create
docker-compose run backend rails db:migrate
docker-compose run backend rails db:seed
~~~~~~~~~

### railsコンソール

~~~~~~~~~
docker-compose run backend rails console
~~~~~~~~~
