var markerItems = [{"center":["59.868817","30.454011"]}]
$(function() {

	$('.header .search-zoom').on('click', function(e) {
		
		$('.header-2').fadeToggle()
	});

	jQuery('.datetimepicker').datetimepicker({
		format:'d.m.Y H:i',
		inline:true,
		lang:'ru'
	});


	$('select').selectize();

	jQuery.datetimepicker.setLocale('ru');

	$('.content-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true
	});

	$('.form__input_phone').inputmask("+7 (999) 999 99 99");

	$('.menu-toggler').on('click', function(e) {
		$('body').toggleClass('menu-openned');

		var h = $(window).height();

		$('.menu-wrapper, .menu-wrapper__inner').css('height', h - 65);
	});


	$('.gallery-slider-main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.gallery-slider-nav',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				dots: true
			  }
			},
			
		  ]
	  });
	  $('.gallery-slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.gallery-slider-main',
		dots: false,
		arrows: true,
		vertical: true,
		focusOnSelect: true,
	  });
			  
	  $('.tile-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		infinite: false
	  });

	  $('.intro-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false
	  });


	  

	  
	var $textSlider;

	var $flipster = $('.slider-flipster').flipster({
		style: 'carousel',
		spacing: -0.5,
		loop: true,
		buttons: false,
		click: true,
		scrollwheel: false,
		keyboard: true,
		touch: true,
		start: 0,
		onItemSwitch: function(currentItem, previousItem) {
			$textSlider.slick('slickGoTo', $(currentItem).index());
		}
	});


	$textSlider = $('.text-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		fade: true
	});

	$('.text-slider-next').on('click', function() {
		$flipster.flipster('next');
		$('.text-slider').slick('slickNext');
	});

	$('.text-slider-prev').on('click', function() {
		$flipster.flipster('prev');
		$('.text-slider').slick('slickPrev');
	});



	if( $('#map').length ) {
		ymaps.ready(initYandexMap);
	}
});


function initYandexMap() {

    var myMap = new ymaps.Map('map', {
            center: markerItems[0].center,
            zoom: 13,
            controls: ["zoomControl", "fullscreenControl"],
            behaviors: ['drag'],
        }, {
            searchControlProvider: 'yandex#search'
        });

    if($(window).width() < 574) {
        myMap.behaviors.disable(['drag']);
    }

    collection = new ymaps.GeoObjectCollection(null, {preset: 'islands#blueIcon'}),

    myMap.geoObjects.add(collection);

    for (var j = 0, m = markerItems.length; j < m; j++) {
        createItem(markerItems[j], collection)
    }

    function createItem(item, collection) {

        var placemark = new ymaps.Placemark(
            item.center, {
                balloonContent: ''
            }, {
                iconLayout: 'default#image',
                iconImageHref: '../img/map_icon.png',
                iconImageSize: [83, 81],
                iconImageOffset: [-50, -79]
            }
        );
       
        collection.add(placemark);

    }

}