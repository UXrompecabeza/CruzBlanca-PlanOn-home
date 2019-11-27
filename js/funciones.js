$(".auto-carousel").slick({
  slidesToShow: 1,
  dots: !0,
  infinite: !0,
  slidesToScroll: 1,
  arrows: !0,
  autoplay: !0,
  autoplaySpeed: 5e3
})
$(".banner-carousel").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: !0,
  arrows: !1
})
$(".btn-carousel").slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: !1,
  arrows: !1,
  responsive: [{
      breakpoint: 767,
      settings: {
          dots: !0
      }
  }]
});
$(".btn-carousel_md").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  arrows: false,
  responsive: [{
    breakpoint: 767,
    settings: {
        slidesToShow: 1,
      }
  }]
});