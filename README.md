# AppleDailyUnblock

蘋果日報最近需要加入會員才能看到內容,

但, 其實工程師寫得太懶了所以很容易破解啊啊啊啊


## How to use

在瀏覽器內的任何一個網頁, 按'把頁面增加到書籤列' (Chrome快捷鍵 = CMD + D)

會彈出下列畫面, 點選'更多/More':

<img src="img1.png" width="324" height="206" />

把原本的URL刪除, 加入這行code(很長, 要複製全部喔):

```
javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://dl.dropbox.com/s/hnft3zhxjfd099i/unblock.js';})();
```

<img src="img2.png" width="514" height="136" />



## 之後到任何鎖住的蘋果新聞頁面, 只要按一下書籤, 就可以解鎖了

<img src="demo.gif" />
