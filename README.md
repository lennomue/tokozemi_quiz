<div style="height: 30px; background-color:rgb(255, 255, 255);"></div>

---
[TOP](./README.md)

---
# クイズまとめサイト!

---

<p style="color: gray; font-size: 12px;">
最終更新(2025/01/17)　投稿日(2025/01/12)
</p>

<style>
.header {
    position: fixed; /* 画面上部に固定 */
    top: 0;
    left: 0;
    width: 100%;
    height: 60px; /* ヘッダーの高さ */
    background-color: rgba(160, 200, 255, 0.31); /* 背景色（濃いグレー） */
    color: #fff; /* テキスト色（白） */
    display: flex; /* フレックスボックスでレイアウト */
    align-items: center; /* 縦方向中央揃え */
    justify-content: center; /* 左右に要素を配置 */
    box-shadow: 0 8px 6px rgba(0, 0, 0, 0.1); /* 軽い影 */
    z-index: 1000; /* 他の要素より前面に表示 */
    transform: translateY(0);
    /* transform: translateY(-100%); */
    transition: transform 0.3s ease-in-out; /* スムーズなアニメーション */
}

/* ロゴ画像のスタイル */
.header img {
    height: 40px; /* ロゴ画像の高さ */
    cursor: pointer; /* クリック可能なポインターを表示 */
    transition: transform 0.3s ease; /* ホバー時のアニメーション */
    background-color: transparent; /* 背景を透明に指定 */
    image-rendering: auto; /* PNG画像のレンダリング設定 */
}
.info-section {
    background-color: #f4f4f4;
    border: 2px solid #ccc;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 各リンクのスタイル */
.info-section a {
    text-decoration: none;
    color:rgb(28, 126, 231);
    font-weight: bold;
    transition: color 0.3s ease, text-shadow 0.3s ease;
}

.info-section a:hover {
    color:rgb(98, 171, 245);
    text-shadow: 0 0 5px rgba(109, 175, 250, 0.6);
}

/* 強調された文のスタイル */
.info-section .acc {
    text-decoration: none;
    color:rgb(242, 121, 34);
    font-weight: bold;
    transition: color 0.3s ease, text-shadow 0.3s ease;
    text-decoration:underline;
}

.info-section .acc:hover {
    color:rgb(251, 189, 33);
    text-shadow: 0 0 5px rgba(239, 245, 128, 0.6);
}

/* 強調された文のスタイル */
.info-section p {
    margin: 5px 0;
    color: #000;
    font-size: 1em;
}
</style>


<!-- このjsスクリプト、反映されないかも、、 -->
<script>
  let lastScrollPosition = 0;
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
      const currentScrollPosition = window.scrollY;
      console.log("scrolled!");
      if (currentScrollPosition > lastScrollPosition) {
          // 下スクロール時にヘッダーを隠す
          header.style.transform = 'translateY(-100%)';
      } else {
          // 上スクロール時にヘッダーを表示
          header.style.transform = 'translateY(0)';
      }
      lastScrollPosition = currentScrollPosition;
  });
</script>


<div class="header">
    <a href="https://tokozemi.securesite.jp/">
        <img src="./Image/tokozemi_logo_touka.PNG" alt="サイトロゴ">
    </a>
</div>
<script src="script.js"></script>

<!-- htmlタグからのhrefをする際には、github pagesがレンダーしたのちの~.htmlで指定します -->
<div class="info-section">
    <p>・<a class="acc" href="#ものの数え方--お箸は一膳-">現在掲載中の問題へ!</a></p>
    <p>・今までの問題の <a href="./SUMMARY.html">保管庫へ</a></p>
    <p>・このサイトでは<a href="./Puzzle/puzzle_home.html">パズル</a>や<a href="./Trivia/trivia_home.html">トリビア</a>クイズをまとめています。</p>
    <!-- コメントアウトされた箇所はそのまま -->
    <!-- <p>左の目次バーからジャンル毎の出題も見れます。</p> -->
    <p>・上部のパンくずリストの<a>TOP</a>でここに戻れます。</p>
</div>

<!-- cssを埋め込む！ ここまで-->

[](将来的にはhtml、cssで描きたいな〜画像とかボタンとか。。)

---

- [クイズまとめサイト!](#クイズまとめサイト)
  - [-パズル-](#-パズル-)
    - [ひもで時間計測](#ひもで時間計測)
    - [ピッタリ水汲み](#ピッタリ水汲み)
  - [-トリビア-](#-トリビア-)
    - [「勿忘草」](#勿忘草)
    - [「寤寐思服」](#寤寐思服)
    - [「鳩尾」](#鳩尾)
    - [「窈窕」](#窈窕)
    - [歌舞伎で見る幕](#歌舞伎で見る幕)
    - [そば処の"おばけ"](#そば処のおばけ)
    - [ものの数え方 ~ お箸は一膳 ~](#ものの数え方--お箸は一膳-)
    - [マリトッツォの意味](#マリトッツォの意味)
    - [昼過ぎの眠気](#昼過ぎの眠気)
  - [参考としているサイト群](#参考としているサイト群)

---
## -パズル-
---

### ひもで時間計測
Q. ちょうど1時間で燃えるひもが2本あります。マッチとひもを使って45分を計測してください。ひもに目印をつけたりはできません。
<details>
  <summary> ヒント </summary>
  1時間以外を計測するためにできることを探す。<br>
  両端から同時に火をつけることで半分の時間を計測できることに気付けるかが勝負である。
</details>
<details>
  <summary> 回答 </summary>
  初めに火を3箇所(一本目の両端と二本目の片端)につけて、一本目が燃え切った時点で30分が計測できる。そのタイミングで二本目の端に火をつけることで、残り30分の半分である15分を加え、目標の45分が測れる。
</details>

---
### ピッタリ水汲み
Q. 5Lと3Lの容器が一つずつあります。これを用いて以下の2操作だけで4Lを計量してください。
- 水を満杯まで入れる
- 水を全て捨てる
- 他方が満杯になるまで移す
<details>
  <summary> ヒント </summary>
  4Lを(3+1)Lと見るなら1Lを作りたい。<br>
  他にも(5-1)Lと見るなら5L満杯から3L容器に1L入れることを考える。その時の3L容器に2Lだけあれば良い。<br>
  つまり3, 5以外にも1, 2Lの水を作ることを目標にする。
</details>
<details>
  <summary> 回答 </summary>

  回答は一つではないですのであくまで2つ例を紹介します。
  <ul>
    <li>5L容器を満杯にし、3L容器に移す</li>
    <li>3L容器の水を捨てて、5L容器に残った2Lを3L容器に移す</li>
    <li>5L容器を満杯にし、3L容器に1L分移すことで5L容器に4L残る。</li>
  </ul>

  他の解法としても

  <ul>
    <li>3L容器を満たして、5L容器に移す。</li>
    <li>もう一度3L容器を満たして5L容器に2L分移す。</li>
    <li>5L容器を空にして、3L容器に残った1L分を5Lに移す。</li>
    <li>3L容器を満たして5L容器に移して4Lとなる。</li>
  </ul>

  <p style="color: gray;">図解はいつかきっと、、</p>

</details>

---
## -トリビア-
---

### 「勿忘草」
<details>
  <summary> 意味 </summary>
  英名は「forget-me-not」ともいう。
  英名も含めて楽曲のタイトルとして多用される。<br>
  なお、この命名はドイツの物語でのセリフ"Vergiss-mein-nicht!"（僕のことを忘れないで！）に由来しているとされる。
</details>
<details>
  <summary> 答え </summary>
  「わすれなぐさ」
</details>

---
### 「寤寐思服」
<details>
  <summary> 意味 </summary>
  寝ても覚めても忘れられないこと、また人に対する思いが切ないこと。<br>
  「寤」は起床すること。「寐」は就寝すること。「思服」はいつも思っていること。
</details>
<details>
  <summary> 答え </summary>
  「ごびしふく」
</details>


---
### 「鳩尾」
<details>
  <summary> 意味 </summary>
  胸とへその間のへこんだ部分。心窩部（しんかぶ）ともいう。
</details>
<details>
  <summary> 答え </summary>
  「みぞおち」
</details>

---
### 「窈窕」
<details>
  <summary> 意味 </summary>
  美しくしとやかなさま。上品で奥ゆかしいさま。
</details>
<details>
  <summary> 答え </summary>
  「ようちょう」
</details>

---
### 歌舞伎で見る幕
Q. この幕はなんという？
<img src="./Image/trivia_mono_kabuki.jpg" width = "300px">

<details>
  <summary> 答え </summary>
  「定式幕」(じょうしきまく)
</details>
<details>
  <summary> 解説 </summary>
  それぞれの色は黒色、柿色、萌葱色と言う。なお、流派によって色使いや順番の異なるものもある。<br>
  また、歌舞伎にはさまざまな幕が登場する。「黒幕」の語源も歌舞伎のそれであることも有名。<br>
  画像の引用先の<a href="https://enmokudb.kabuki.ne.jp/phraseology/2569/">サイト</a>で詳しく勉強もできる。
</details>

---
### そば処の"おばけ"
Q. そば/うどん屋のメニューに「おばけ」というものがある。どのような料理か？
<details>
  <summary> 答え </summary>
  油揚げと揚げ玉が両方乗せられたもの
</details>
<details>
  <summary> 解説 </summary>
  日本では料理の名称や、同名の料理でも調理法に地域差がある。<br>
  関東で「きつね」というと油揚げ、「たぬき」というと天かすの乗ったものを指すことが多い。この二種の動物は共に「化かす」動物であり、それが由来とされる。<br>
  なぜ狐が油揚げを指すのか、一つは油揚げがきつね色であることが理由だそう。他にも「いなり寿司」と稲荷のきつねとの関係なども調べてみよう
</details>

---
### ものの数え方 ~ お箸は一膳 ~
Q. 次のものを数える時に共通する単位は？
<ol>
  <li>はさみ,豆腐<br>
  <details>
  <summary> 答え </summary>
  ・丁(ちょう)
  </details>
  <li>鳥居,ピラミッド<br>
  <details>
  <summary>答え</summary>
  ・基(き)
  </details>
  <li>昆布,鰹節<br>
  <details>
  <summary>答え</summary>
  ・連(れん)
  </details>
</ol>

---

### マリトッツォの意味
Q. イタリアのお菓子として知られるマリトッツォ。その名前の由来は？
<details>
  <summary> 答え </summary>
  「小さな夫」
</details>
<details>
  <summary> 解説 </summary>
  イタリア語で夫を意味する「マリート（Marito）」からきているというのが有力である。<br>
  昔、男性がマリトッツォの中に婚約指輪を入れて女性にプロポーズするという習慣があったとかなかったとか、、
</details>

---
### 昼過ぎの眠気
Q. 午後に眠くなるという傾向を英語でなんというか？
<details>
  <summary> 答え </summary>
  <ul>
    <li>アフタヌーンディップ</li>
    <li>ポストランチディップ</li>
  </ul>  
</details>
<details>
  <summary> 解説 </summary>
  ほぼ直訳、dipは落ち込むといった意味である。<br>
  午後の眠気は食事による血糖値の上昇が要因と考えやすいが、食事がなくても昼過ぎに眠気が来るという実験があったそうで、じゃ眠くたって仕方ないじゃない！
</details>

---
---

## 参考としているサイト群
- [goo辞書](https://dictionary.goo.ne.jp/)
- [Wikipedia](https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8)
- [四字熟語辞典オンライン](https://yoji.jitenon.jp/)