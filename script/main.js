$(function(){
  var topBtn=$('#page_top');
  topBtn.hide();
  
  $(window).scroll(function(){
    if($(this).scrollTop()>80){
      // 画面を80pxスクロールしたら、ボタンを表示する
      topBtn.fadeIn();
    }else{
      // 画面が80pxより上なら、ボタンを表示しない
      topBtn.fadeOut();
    }
  });
  
  topBtn.click(function(){
    $('body,html').animate({
    scrollTop: 0},500);
    return false;
  });
  
  });
