### useContext について

先程教えていただいた useContext で Todo.jsx から Button.jsx について props を流せるか検討していましたが、僕の力ではできませんでした。というより、する意味があまりないと言った方が正しいかもしれません。
そう思った理由なのですが、以下になります。

- ButtonBlick.jsx にてそれぞれの Button の要素を分配しているので、そのまま配下コンポーネントに流している props がなかったため。

例えば、全てのボタンコンポーネントに共通する動作を Todo.jsx で作成し、Button.jsx で使用するのであれば、useContext を活用して中間のコンポーネントにはバケツリレーに参加しないようにすることはできると思います。（今回でいうと deleteEvent がそれに当たるかと思います。）
しかし、ボタンタグにおいてはそれがなかったので僕的にはできないと感じました。
もし可能であれば教えていただきたいです。

参考にしたサイト
[React hooks を基礎から理解する (useContext 編)](https://qiita.com/seira/items/fccdf4e73c59c491558d)

お時間ある時にご回答よろしくお願いします！！
