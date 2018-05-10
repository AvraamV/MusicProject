jQuery(document).ready(function($) { 

  var hellopreloader = document.getElementById("hellopreloader_preload");function fadeOutnojquery(el){el.style.opacity = 1;var interhellopreloader = setInterval(function(){el.style.opacity = el.style.opacity - 0.05;if (el.style.opacity <=0.05){ clearInterval(interhellopreloader);hellopreloader.style.display = "none";}},16);}window.onload = function(){setTimeout(function(){fadeOutnojquery(hellopreloader);},1000);};
  

  $('.slider').slick({
    dots: true,
    dotsClass: "slider-dots",
    autoplay: false,
    arrows: true,
    nextArrow: '<div class="slick-arrow next-arrows"></div>',
    prevArrow: '<div class="slick-arrow prev-arrows"></div>',
    responsive: [{
      breakpoint: 540,
      settings: {
        adaptiveHeight: true, 
      } 
    }]
  });


  $('.history-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.history-slider-nav'
  });

  $('.history-slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.history-slider',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
     responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 561,
      settings: {
        slidesToShow: 1,
        fade: true,
      }
    }
  ]
  });
});

//Перехід по якорям менюшки
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
 
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});



 //POP-UP

$('a#modal-one').click( function(event){ // лoвим клик пo ссылки с id="go"
    event.preventDefault(); // выключaем стaндaртную рoль элементa
    $('.overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
      function(){ // пoсле выпoлнения предъидущей aнимaции
        $('.overlay').addClass('active');
        $('body').addClass('menu-opened');
        $('#modal_form_one') 
          .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
          .animate({opacity: 1, top: '30%'}, 400); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
    });
  });
  /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
  $('.overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
    $('#modal_form_one')
      .animate({opacity: 0, top: '5%'}, 400,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
        function(){ // пoсле aнимaции
          $(this).css('display', 'none'); // делaем ему display: none;
          $('.overlay').removeClass('active'); // скрывaем пoдлoжку
          $('body').removeClass('menu-opened');
        }
      );
  });

  $('a#modal-two').click( function(event){ // лoвим клик пo ссылки с id="go"
    event.preventDefault(); // выключaем стaндaртную рoль элементa
    $('.overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
      function(){ // пoсле выпoлнения предъидущей aнимaции
        $('.overlay').addClass('active');
        $('body').addClass('menu-opened');
        $('#modal_form_two') 
          .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
          .animate({opacity: 1, top: '30%'}, 400); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
    });
  });
  /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
  $('.overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
    $('#modal_form_two')
      .animate({opacity: 0, top: '5%'}, 400,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
        function(){ // пoсле aнимaции
          $(this).css('display', 'none'); // делaем ему display: none;
          $('.overlay').removeClass('active'); // скрывaем пoдлoжку
          $('body').removeClass('menu-opened');
        }
      );
  });

  $('a#modal-three').click( function(event){ // лoвим клик пo ссылки с id="go"
    event.preventDefault(); // выключaем стaндaртную рoль элементa
    $('.overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
      function(){ // пoсле выпoлнения предъидущей aнимaции
        $('.overlay').addClass('active');
        $('body').addClass('menu-opened');
        $('#modal_form_three') 
          .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
          .animate({opacity: 1, top: '30%'}, 400); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
    });
  });
  /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
  $('.overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
    $('#modal_form_three')
      .animate({opacity: 0, top: '5%'}, 400,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
        function(){ // пoсле aнимaции
          $(this).css('display', 'none'); // делaем ему display: none;
          $('.overlay').removeClass('active'); // скрывaем пoдлoжку
          $('body').removeClass('menu-opened');
        }
      );
  });


  

  if(document.body.clientWidth < 1025){
    $('#menu-button').click(function() {
    $(this).toggleClass('active');
    $('#menu').slideToggle();
    $('body').toggleClass('menu-opened');
  });

    $('#menu a').click(function() {
    $('#menu-button').toggleClass('active');
    $('#menu').slideToggle();
    $('body').removeClass('menu-opened');
  });
}
  