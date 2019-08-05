
$(document).ready(function () {
	// scroll
	$('.coppyright .fa').click(function (e) { 
		e.preventDefault();
		$("body,html").animate({scrollTop:0});
	});
	$(window).scroll(function(){
		$('.bg-header.fixed-top').addClass('bg-black');
	})
	// end scroll
	$('.carousel-product').carousel({
		wrap: false
	})

	// category product
	// view cart
	$('.viewcart i.fa.fa-remove').click(function (e) { 
		e.preventDefault();
		$('.viewcart').removeClass('visible');
	});
	$('.viewcart i.fa.fa-remove').click(function (e) { 
		e.preventDefault();
		$('.bg-header .no_product').addClass('visible');
		$('.header .fa-cart-plus').removeClass('add');
	});

	$('.checkout._1 a.btn-food').click(function (e) { 
		e.preventDefault();
		$('.checkout._2').addClass('visible');
		$('.checkout._1').removeClass('visible');
	});
	$('.detailproduct  .button').click(function (e) { 
		e.preventDefault();
		$('.cart').addClass('hidden');
		$('.checkout._1').addClass('visible');
		$('.viewcart').removeClass('visible');
	});
	$('.header .view').click(function (e) { 
		e.preventDefault();
		$('.viewcart').addClass('visible');
		$('.nav-mobile').removeClass('visible');
	});
	// end view cart
	$('.section5 .titleproduct a.cr3.fs1:nth-child(2)').click(function (e) { 
		e.preventDefault();
		$('.section5 .burger').addClass('hidden');
		$('.section5 .pizza').addClass('visible');
		$('.section5 .drinks').removeClass('visible');
	});
	$('.section5 .titleproduct a.cr3.fs1:nth-child(3)').click(function (e) { 
		e.preventDefault();
		$('.section5 .drinks').addClass('visible');
		$('.section5 .pizza').removeClass('visible');
	});
	// endcategory product
	// navbar mobile
	$('.fa-bars').click(function (e) { 
		e.preventDefault();
		$('.nav-mobile').addClass('visible');
		$('.bg-background').addClass('visible');
	});
	$('.fa-remove').click(function (e) { 
		e.preventDefault();
		$('.nav-mobile').removeClass('visible');
		$('.bg-background').removeClass('visible');
	});
// end navbar mobile
	// viewdetail
	$('.fa.fa-eye ').click(function (e) { 
		e.preventDefault();
		$('.viewdetail').addClass('visible');
		$('.bg-background').addClass('visible');
	});
	$('.fa-remove').click(function (e) { 
		e.preventDefault();
		$('.viewdetail').removeClass('visible');
		$('.bg-background').removeClass('visible');
	});
	$('.bg-background').click(function (e) { 
		e.preventDefault();
		$('.viewdetail').removeClass('visible');
		$('.bg-background').removeClass('visible');
	});
	$('.nameproduct .button .btn').click(function (e) { 
		e.preventDefault();
		$('.viewdetail').removeClass('visible');
		$('.bg-background').removeClass('visible');
		$('.header .fa-cart-plus').addClass('add');
	});
	// end viewdetail
	// description 
	$('.info .title  a.fs2.underline:nth-child(2)').click(function (e) { 
		e.preventDefault();
		$('.container.description').addClass('visible');
		$('.review').removeClass('visible');
	});
	$('.info a.fs2.underline:last-child').click(function (e) { 
		e.preventDefault();
		$('.container.description').removeClass('visible');
		$('.review').addClass('visible');
	});
	$('.info a.fs2.underline:first-child').click(function (e) { 
		e.preventDefault();
		$('.review').removeClass('visible');
		$('.container.description').removeClass('visible');
	});
	// end description 


	// add product
	var dem = 0 ; 
	$('.number .fa-plus').click(function (e) { 
		e.preventDefault();
		dem++; 
		// console.log(dem);
		 $('p._1.cr4.fs2').addClass('hidden');
		$('p._2.cr4.fs2').text(dem);
	});
	var dem = 0 ; 
	$('.number .fa-minus').click(function (e) { 
		e.preventDefault();
		dem--; 
		// console.log(dem);
		 $('p._2.cr4.fs2').addClass('hidden');
		$('p._1.cr4.fs2').text(dem);
	});
	// end add product
	
	$('.number .fs3.fa-minus').click(function (e) { 
		e.preventDefault();
		
		$('p._1.cr4.fs2').removeClass('hidden');
	});
	// view product
	$('.image img.img-fluid._1').click(function (e) { 
		e.preventDefault();
		$('.image img.pr1').addClass('visible');
		$('.image img.pr2').removeClass('visible');
		$('.image img.pr3').removeClass('visible');
		$('.image img.pr4').removeClass('visible');
	});
	$('.image img.img-fluid._2').click(function (e) { 
		e.preventDefault();
		$('.image img.pr2').addClass('visible');
		$('.image img.pr3').removeClass('visible');
		$('.image img.pr4').removeClass('visible');
	});
	$('.image img.img-fluid._3').click(function (e) { 
		e.preventDefault();
		$('.image img.pr3').addClass('visible');
		$('.image img.pr4').removeClass('visible');
	});
	$('.image img.img-fluid._4').click(function (e) { 
		e.preventDefault();
		$('.image img.pr4').addClass('visible');
	});
	// end view product
	// add to cart
	$('.button .btn.Add').click(function (e) { 
		e.preventDefault();
		$('.header .fa-cart-plus').addClass('add');
	});
	// end add to cart
	// login
	$('.bigform .btn-food').click(function (e) { 
		e.preventDefault();
		$('.header .login .bigform').addClass('hidden');
		$('.header .fa-user').addClass('avt');
		$('.loginsuccess').addClass('visible');
		$('.login').addClass('name');
		$('.bg-background').removeClass('visible');

	});
	$('.bigform .btn-food:first-child').click(function (e) { 
		e.preventDefault();
		$('.loginsuccess p.fs3._2').addClass('hidden');
	});
	$('.fa-user').click(function (e) { 
		e.preventDefault();
		$('.nav-mobile').removeClass('visible');
		$('.loginmobile.header').addClass('visible');
	});
	$('.fa-user.clickavt').click(function (e) { 
		e.preventDefault();
		$('.logout').addClass('visible');
	});
	$('ul.profile a.fs5.out').click(function (e) { 
		e.preventDefault();
		$('.logout').removeClass('visible');
	});
	// end login
	$('.header .avt').click(function (e) { 
		e.preventDefault();
		$('.header .logout').addClass('visible');
	});
	$('.profile .out').click(function (e) { 
		e.preventDefault();
		// $('.logout').removeClass('visible');
		$('.header .fa-user').removeClass('avt');
	});
	// sign up
	$('.login span.fs5').click(function (e) { 
		e.preventDefault();
		$('.login .form-group').removeClass('hidden');
		$('.login .button a.btn:last-child').addClass('visible');
		$('.login .button a.btn:first-child').addClass('hidden');
	});
	$('.login h2.cr1.fs4').click(function (e) { 
		e.preventDefault();
		$('.login .form-group:nth-child(even)').addClass('hidden');
		$('.login .button .btn:first-child').removeClass('hidden');
		$('.login .button .btn:last-child').removeClass('visible');
	});
	$('.bigform .btn-food:last-child').click(function (e) { 
		e.preventDefault();
		$('.loginsuccess p.fs3._1').addClass('hidden');
		$('.header .login').addClass('name');
	});
	$('.bigform .btn-food').click(function (e) { 
		e.preventDefault();
		$('.header .name').addClass('visible');
	});
	$('.header avt').click(function (e) { 
		e.preventDefault();
		$('.header .logout').addClass('visible');
	});
	$('.nav-mobile .col-lg-3 a.rounded-circle').click(function (e) { 
		e.preventDefault();
		$('bigform').addClass('visible');
	});
	// end sign up
});
// new WOW().init();