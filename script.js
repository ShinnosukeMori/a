'use strict';
$(function () {
    // サービス詳細切り替え
    $('#service--item--button--hp').click(function () {
        $('#service--item--hp').addClass('scrolin');
        $("#service--item--wp").removeClass('scrolin');
        $("#service--item--ec").removeClass('scrolin');
    });
    $('#service--item--button--wp').click(function () {
        $('#service--item--hp').removeClass('scrolin');
        $("#service--item--wp").addClass('scrolin');
        $("#service--item--ec").removeClass('scrolin');
    });
    $('#service--item--button--ec').click(function () {
        $('#service--item--hp').removeClass('scrolin');
        $("#service--item--wp").removeClass('scrolin');
        $("#service--item--ec").addClass('scrolin');
    });

    // テンプレ一覧
    $("#template--button").on("click", function () {
        $(".template--img--wap,.erase").slideToggle(1000);
    })
    $(".erase").on("click", function () {
        $(".template--img--wap,.erase").slideUp(1000);
    })

    // アニメーション
    let winHeight, winScroll, scrollPos;
    $(window).on('load scroll', function () {
        winScroll = $(window).scrollTop();
        winHeight = $(window).height();
        scrollPos = winHeight * 0.8 + winScroll;
        $(".slidein").each(function () {
            if ($(this).offset().top <= scrollPos) {
                $(this).addClass("show");
            } else {
                $(this).removeClass("show");
            }
        });
        $(".slide--marker").each(function () {
            if ($(this).offset().top <= scrollPos) {
                $(this).addClass("marker");
            } else {
                $(this).removeClass("marker");
            }
        });
    });

    // スライド
    $('.main--video--slick').slick({
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        fade: true,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false
    });
    $('.right--slick').slick({
        arrows: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        dots: true,
    });

    // トップに戻る
    const pagetop_btn = document.querySelector(".pagetop");

    pagetop_btn.addEventListener("click", scroll_top);
    function scroll_top() {
        window.scroll({ top: 0, behavior: "smooth" });
    }

    // スクロールされたら表示
    window.addEventListener("scroll", scroll_event);
    function scroll_event() {
        if (window.pageYOffset > 500) {
            pagetop_btn.style.opacity = "1";
        } else if (window.pageYOffset < 100) {
            pagetop_btn.style.opacity = "0";
        }
    }

    // ドロワーメニュー
    const drawer = document.getElementById("drawer");
    const drawer__wap = document.getElementById("drawer--wap");
    const inquiry = document.getElementById("inquiry");

    drawer.addEventListener("click", function () {
        drawer__wap.classList.toggle("active");
        inquiry.classList.toggle("z-index");
    });

    // 問い合わせモーダル
    const form__con = document.getElementById("form--con");

    inquiry.addEventListener("click", function () {
        form__con.classList.toggle("on");
        console.log('aergae')
    });

    // ローディング画面
    $(function () {
        $(window).on('load', function () {
            $('.loader').delay(500).fadeOut(500);
            $('.loader-bg').delay(500).fadeOut(700);
        });
        setTimeout(function () {
            $('.loader-bg').fadeOut(500);
        }, 5000);
    });
});
