	$(document).ready(function() {
	// відвинуть прайс
	$(".bas").click(function(){
  $(".sli").removeClass("act");
	$(".one").addClass("act");

	
	});
	// відвинуть прайс
	$(".prof").click(function(){
		$(".sli").removeClass("act");
	  $(".two").addClass("act");
		
	});
	// відвинуть прайс
	$(".enter").click(function(){
	$(".sli").removeClass("act");
	$(".three").addClass("act");
	
	});



	// мобильное меню
	$(".nav-mobile").on("click", function(){
		$(this).toggleClass("active");
		$("ul.menu").toggleClass("showed");

	});

	// убираем классы при разрешении 768px
	function screen_check(){
		if ($(window).width() >= 768) { 
		$('ul.menu').removeClass("showed");
		$('.nav-mobile').removeClass("active");
		}
	}
	screen_check();
	$(window).resize (function(){
		screen_check();
	});


	// закрепляем сверху меню
	var head = document.getElementById("header");

	var headSourceBottom = head.getBoundingClientRect().bottom + window.pageYOffset;

	window.onscroll = function() {
		if (head.classList.contains('fixed') && window.pageYOffset < headSourceBottom) {
			head.classList.remove('fixed');
			toTop.style.display= "none";
		} else if (window.pageYOffset > headSourceBottom) {
			head.classList.add('fixed');
			toTop.style.display= "";
		}
		};

	// кнопка вверх
	$("#toTop").click(function() {
			$.scrollTo($(".insert"), 800, {
				offset: -90
			});
		});

	//slick slider
	
	$('.js-slick').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
		arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
		arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
		arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	$('.js-slick-price').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
		arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
		arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
		arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	



	//Таймер обратного отсчета
	
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		}
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 2,
		autoHeight:true
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:

	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	
	$("form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
        
        
        // ремодал собітия
        $(document).on('open', '.remodal', function () {
            // открытие окна
            var modal = $(this);
        });

        $(document).on('opened', '.remodal', function () {
            // окно открыто
            var modal = $(this);
        });

        $(document).on('close', '.remodal', function () {
            // закрытие окна
            var modal = $(this);
        });

        $(document).on('closed', '.remodal', function () {
            // окно закрыто
            var modal = $(this);
        });

        $(document).on('confirm', '.remodal', function () {
            // нажатие на кнопку подтверждения
            var modal = $(this);
        });

        $(document).on('cancel', '.remodal', function () {
            // нажатие на кнопку отмены
            var modal = $(this);
        });

});