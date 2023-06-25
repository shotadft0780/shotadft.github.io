$(function() {
  $('#copy').on('click', function(){
    //　テキストエリアを選択
    $('#result').select();
    // コピー
    document.execCommand('copy');
  });
});
