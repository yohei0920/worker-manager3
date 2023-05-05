# ベースイメージを指定
FROM node:latest

WORKDIR /frontend

COPY package*.json ./

RUN yarn install

# ソースコードをコピー
COPY . .

# アプリを起動するコマンドを指定
CMD ["yarn", "start"]
