$(function () {
  // スクロールしたら「トップに戻る」ボタンが表示される
  const toTopButton = $("gotop");
  const scrollHeight = 100;
  toTopButton.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      toTopButton.fadeIn();
    } else {
      toTopButton.fadeOut();
    }
  });
            pageTop.click(function() {
                $('body, html').animate({
                    scrollTop: 0
                }, 500, 'swing');
                pageTop.blur();
                return false;
            });
        });
