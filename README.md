# puppeteer_test

## version
- node: 12
- puppeteer: 5.0.0

## setup
1. コンテナを立ちげる

※`docker-compose.yml` ファイルと同じ階層にて実行。
```
% docker-compose up --build
```

2. コンテナに入りパッケージをインストール

```
% docker-compose exec main bash
/# cd usr/src
/usr/src# yarn install
```

3. サンプルコードが動くことを確認。

```
/usr/src# node app/script/app.js
```

スクリーンショット(`/usr/src/example.png`)が行われていることを確認できればOK!
