## 開発コマンド

### Docker

~~~~~~~~~
docker-compose build
docker-compose up
~~~~~~~~~



### Gemインストール

~~~~~~~~~
docker-compose run backend bundle install
~~~~~~~~~



### DBのリセットと作成

~~~~~~~~~
docker-compose run backend rails db:drop
docker-compose run backend rails db:create
docker-compose run backend rails db:migrate
docker-compose run backend rails db:seed
~~~~~~~~~



### Railsコンソール

~~~~~~~~~
docker-compose run backend rails console
~~~~~~~~~



### RSpec

~~~~~~~~~
 docker-compose run backend bundle exec rspec
~~~~~~~~~



### Docker起動中にbinding.pryする方法

1. docker-compose upでbinding.pryが止まっていることを確認
2. docker psでコンテナIDを調べる
3. 別タブで `docker attach 2のコンテナID`を実行
4. 終了時は`exit`を実行
