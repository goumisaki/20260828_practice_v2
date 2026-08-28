const express = require('express')
const app = express();
const port = 3000


//標準モジュールの読み込み
const fs = require('fs').promises; // ファイルシステムモジュールの読み込み
const path = require('path');     // パス操作モジュールの読み込み


//設定
app.use(express.urlencoded({ extended: true }));//POST通信設定
app.use(express.static( path.join( __dirname, 'public') )); //静的ファイルの指定
app.set('view engine', 'ejs'); //テンプレートエンジンにEJSを設定
app.set('views', path.join( __dirname, 'views') ); //ビューのディレクトリを設定




app.get('/', (req, res) => {
  res.send('Hello World!')
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
