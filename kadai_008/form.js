$(function () {
  // class属性がbtnの要素がクリックされたら
  $('.btn').on('click', function () {
    //テキストボックスにテキストを表示
    $('.text-box').val('クリックしました！');
  });
});