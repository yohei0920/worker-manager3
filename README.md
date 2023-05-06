# 従業員管理システム

- 部署テーブルと従業員テーブルを1:多で構成して、どの従業員がどの部署に所属しているかを管理できるシステムです。

### 全体像
<img width="968" alt="image" src="https://user-images.githubusercontent.com/67978940/236623898-dd0c23a0-64c1-447d-999c-099d55a1ac07.png">

### 部署新規作成
<img width="953" alt="image" src="https://user-images.githubusercontent.com/67978940/236623942-6a68209a-2306-4ec1-adbc-64e0386b07c0.png">

### 従業員新規作成
<img width="956" alt="image" src="https://user-images.githubusercontent.com/67978940/236624000-4af64822-00d3-420a-819a-5acf55df9af8.png">

### 従業員参照
<img width="953" alt="image" src="https://user-images.githubusercontent.com/67978940/236624026-d9eff407-d416-4fca-a3b7-3bfa4a5119a7.png">

### 従業員編集
<img width="954" alt="image" src="https://user-images.githubusercontent.com/67978940/236624081-2fc79dc8-d2fb-4595-860a-a4413a89a0d1.png">

### 従業員検索
<img width="955" alt="image" src="https://user-images.githubusercontent.com/67978940/236624131-d5cac506-5259-4ea9-bfb0-f4e5711fa281.png">


# 使用技術

- Ruby 3.1.0
- Ruby on Rails 7.0.4
- MySQL 8.0
- GraphQL
- Rspec
- React 18.2.0
- Apollo Client 3.7.11
- Docker/Docker-compose

# 機能一覧

- 部署と従業員の新規作成、参照、更新、削除(GraphQL)
- 従業員の検索機能

# テスト

- RSpec
    - 単体テスト(model)
    - GraphQLのQueryテスト
    - graphQLのMutationテスト
