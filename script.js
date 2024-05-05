
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
  $('.subpic-top').on('click', function() {
      // モーダルのimgタグのsrcに、クリックした画像のsrcをセット
      $('#modal-img').prop('src', $(this).prop('src'));
      // モーダルを表示
      $('#modal').fadeIn();
  });
  
    // モーダルウィンドウの設定：画像をクリックしたとき
  $('.subpic-more').on('click', function() {
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

// ---------------------------------送信ボタンまわり-------------------------------------------------------
  $(function () {
      // ボタンアニメーション
      $('.button-more').on('mouseover', function () {
        $(this).animate({
          opacity: 0.5,
          marginLeft: 20,
        }, 100);
      });
    });
  
  $(function () {
    // ボタンアニメーション
    $('.button-more').on('mouseout', function () {
      $(this).animate({
        opacity: 1.0,
        marginLeft: 0,
      }, 100);
    });
    
      // フォーカスが外れたとき（blur）にフォームの入力チェックをする
   $('#name').blur(function () {
     inputCheck();
   });
   $('#furigana').blur(function () {
     inputCheck();
   });
   $('#email').blur(function () {
     inputCheck();
   });
   $('#tel').blur(function () {
     inputCheck();
   });
   $('#message').blur(function () {
     inputCheck();
   });
   $('#agree').click(function () {
     inputCheck();
   });
   
   // お問い合わせフォームの入力チェック
   function inputCheck() {
      console.log('inputCheck関数の呼び出し');
    // エラーのチェック結果
    let result;
    
    // エラーメッセージのテキスト
    let message = '';
    
    // エラーがなければfalse、エラーがあればtrue
    let error = false;
    
    // お名前のチェックする「$('#name').val()」で「お名前」に入力されている文字列を取得
    if ($('#name').val() == '') {
        // エラーありの処理
        $('#name').css('background-color', '#f79999');
        // 変数errorにtrueを代入します
        error = true;
        message += 'お名前を入力してください。\n';
        
    } else {
        // エラーなしの処理
        $('#name').css('background-color', '#fafafa');
    }
    
    // フリガナのチェックする「$('#furigana').val()」で「フリガナ」に入力されている文字列を取得
    if ($('#furigana').val() == '') {
        // エラーありの処理
        $('#furigana').css('background-color', '#f79999');
        // 変数errorにtrueを代入します
        error = true;
        message += 'フリガナを入力してください。\n';
        
    } else {
        // エラーなしの処理
        $('#furigana').css('background-color', '#fafafa');
    }
    
    // お問い合わせ内容のチェックする「$('#message').val()」で「お問い合わせ」に入力されている文字列を取得
    if ($('#message').val() == '') {
        // エラーありの処理
        $('#message').css('background-color', '#f79999');
        // 変数errorにtrueを代入します
        error = true;
        message += 'お問い合わせ内容を入力してください。\n';
        
    } else {
        // エラーなしの処理
        $('#message').css('background-color', '#fafafa');
    }
    
    // メールアドレスのチェックする「$('#email').val()」で「メールアドレス」に入力されている文字列を取得
    // 取得内容は「@が含まれていない==-1)」「.が含まれていない==-1)」「未入力」のいずれかの条件に当てはまる「||」となる
    if ($('#email').val() == '' || $('#email').val().indexOf('@')==-1 || $('#email').val().indexOf('.') ==-1){
        // エラーありの処理
        $('#email').css('background-color', '#f79999');
        // 変数errorにtrueを代入します
        error = true;
        message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
        
    } else {
        // エラーなしの処理
        $('#email').css('background-color', '#fafafa');
    }
    
    // 電話番号のチェック（未入力はOK、未入力でない場合は-が必要という分岐をつくる）
    if ($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1 ){
        // エラーありの処理
        $('#tel').css('background-color', '#f79999');
        // 変数errorにtrueを代入します
        error = true;
        message += '電話番号に「-」が含まれていません。\n';
        
    } else {
        // エラーなしの処理
        $('#tel').css('background-color', '#fafafa');
    }
    
     if($('#agree').prop('checked') ===false){
         error = true;
         message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';
     }
     
    // エラーの有無で送信ボタンを切り替え
     if (error == true) {
         $('#submit').attr('src', 'images/button-submit.png');
     } else {
         $('#submit').attr('src', 'images/button-submit-blue.png');
         
     }
     // オブジェクトでエラー判定とメッセージを返す
     result = {
       error: error,
       message: message
     }
 
     // 戻り値としてエラーがあるかどうかを返す
     return result;
   }
  
   // 送信ボタンクリック時の処理
   $('#submit').on('click',function(event) {
     // formタグによる送信を拒否
     event.preventDefault();
     // 入力チェックをした結果をresultに格納
     let result = inputCheck();
     
     // エラー判定とメッセージを取得
     let error = result.error;
     let message = result.message;
     
     if (error == false) {
       // フォーム送信は実際には行わず、送信成功メッセージのみ表示する
       alert('お問い合わせを送信しました。');
     } else {
       // エラーメッセージを表示する
       alert(message);
     }
   });
   
   

document.getElementById('send').addEventListener('click', function(event) {
    event.preventDefault();  // デフォルトの動作（ここではhref="#"によるページのトップへのスクロール）をキャンセル
    // 送信処理を書く
  });
});

