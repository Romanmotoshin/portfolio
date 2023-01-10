$('.review__slider').slick({
  arrows: true,
  slidersToShow: 3,
  slidersToScroll: 1,
  variableWidth: true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 577,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});