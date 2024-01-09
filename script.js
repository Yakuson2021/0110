$(function () {
  // slickを利用してカルーセルを実装する
  $('.pageheader-slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
    speed: 1500,
    pauseOnHover: false
  });
});  
  


  // スクロールしたときにセクションをフェードインさせる
  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
    
  });

// pure JavaScript
window.addEventListener('scroll', function () {
  document.getElementById('scroll-to-top').style.display = 
    (window.pageYOffset > 200) ? 'block' : 'none';
});

document.getElementById('scroll-to-top').addEventListener('click', function(e){
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// jQuery
$(window).scroll(function() {
  if ($(this).scrollTop() > 200) {
    $('#scroll-to-top').fadeIn();
  } else {
    $('#scroll-to-top').fadeOut();
  }
});

$('#scroll-to-top').click(function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop : 0}, 800);
  return false;
});


// モーダルウィンドウの設定：画像をクリックしたとき
$('.subpic').on('click', function() {
    // モーダルのimgタグのsrcに、クリックした画像のsrcをセット
    $('#modal-img').prop('src', $(this).prop('src'));
    // モーダルを表示
    $('#modal').fadeIn();
});
// モーダルウィンドウの設定：モーダルの「閉じる」をクリックしたとき

$('#modal-close').on('click', function() {
    // モーダルを非表示
    $('#modal').fadeOut();
});

// モーダルウィンドウの設定：モーダル背景をクリックしたときも閉じるように
$('#modal').on('click', function(e) {
    if (!$(e.target).closest('.modal-content').length) {
        $('#modal').fadeOut();
    }
});

// ページ内リンクのスクロールをなめらかにする（スムーズスクロール）
$('a[href^="#"]').click(function () {
  const speed = 500;
  const href = $(this).attr('href');
  let $target;
  if (href == '#') {
    $target = $('html');
  }
  else {
    $target = $(href);
  }
  const position = $target.offset().top;
  $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
  return false;
});