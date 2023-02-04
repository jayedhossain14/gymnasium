  $(function(){
    'use strict';

    // menu part start

    



    // menu part end

    // banner slider start  
    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
      });

      // banner slider end

      // about video start 

      $('.venobox').venobox({
        spinner: 'cube-grid',
        spinColor: '#e23e38'
      });
      // about video end


      // team slider start

      $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 1000,
        responsive: [
          {
            breakpoint: 991.98,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 575.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });
      // team slider end

       // testimonial slider start  
       $('.test_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        speed: 1000,
        responsive: [
          {
            breakpoint: 992.98,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    // testimonial slider end

    // counter js start
    $('.counter').counterUp({
      delay: 10,
      time: 2000
  });
    // counter js end

    // ===============
    // logo js start
    // ===============

    $('.logo_slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 2000,
      arrows: true,
      dots: false,
      prevArrow: '<i class="fas fa-chevron-left prev"></i>',
      nextArrow: '<i class="fas fa-chevron-right next"></i>',
      responsive: [
        {
          breakpoint: 1199.98,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
    });
    // ===============
    // logo js end
    // ===============


    // ==================================
    // scroll buton js start
    // ==================================

    $('.bt_top').click(function(){
      $('html,body').animate({
          scrollTop:0,
      },500);
  });

    $(window).scroll(function(){
      var abc= $(this).scrollTop();
   
      if(abc>200){
       $('.bt_top').fadeIn();
      }
   
      else{
       $('.bt_top').fadeOut();
      }
    });

    // ==================================
    // scroll buton js end
    // ==================================


  })