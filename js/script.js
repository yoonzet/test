
$(document).ready(function(){

    // 이미지슬라이드
    $('.slide-img').slick({
        autoplay:true,
        arrows:false,
        dots:true,
    });

    $(".fa-chevron-left").click(function(){
        $('.slide-img').slick("slickPrev")
    });
    $(".fa-chevron-right").click(function(){
        $('.slide-img').slick("slickNext")
    });

    $(".start-btn").click(function(){
        $(".pause-btn").addClass("active");
        $(".start-btn").removeClass("active");
        $('.slide-img').slick("slickPlay");
    });
    $(".pause-btn").click(function(){
        $(".pause-btn").removeClass("active");
        $(".start-btn").addClass("active");
        $('.slide-img').slick("slickPause");
    });

    // // 텍스트 슬라이드
    // $('.slide-txt>ul').slick({
    //     slidesToShow: 2,
    //     slidesToScroll: 5,
    //     autoplay:true,
    //     arrows:false,
    //     autoplaySpeed: 1000,
    //     speed:50000,
    //     // edgeFriction:3,
    // });
    $(".slide-txt-wrap .play").click(function(){
        $(".slide-txt-wrap .pause").addClass("active");
        $(".slide-txt-wrap .play").removeClass("active");
        $(".slide-txt .animation").removeClass("active");
    });
    $(".slide-txt-wrap .pause").click(function(){
        $(".slide-txt-wrap .play").addClass("active");
        $(".slide-txt-wrap .pause").removeClass("active");
        $(".slide-txt .animation").addClass("active");
    });
    $(".box01").click(function(){
        $(".box01").trigger(".select")
    });
    

  });