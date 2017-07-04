$('.navbar-right li').click(function () {
	$('.nav-height').removeClass('in');
})

// 名字正则
$('.your-name').blur(function() {
	var nameval = $('#name').val(),
		Regname = /^[\u4E00-\u9FA5]{1,6}$/;

	if(Regname.test(nameval)) {
		$('.wtname')[0].innerHTML= "输入正确";
		$('.wtname').css("color","green");
	}else {
		$('.wtname')[0].innerHTML= "输入错误";
		$('.wtname').css("color","red");
	};
})

// 电话正则正则
$('.your-phone').blur(function() {
	var phoneval = $('#phone').val(),
		Regphone = /^1(3|4|5|7|8)\d{9}$/;
			
	if(Regphone.test(phoneval)) {
		$('.phone1')[0].innerHTML= "输入正确";
		$('.phone1').css("color","green");
	}else {
		$('.phone1')[0].innerHTML= "输入错误";
		$('.phone1').css("color","red");
	};
})

// 邮箱正则
$('.your-email').blur(function() {
	var emailval = $('#Email').val(),
		Regemail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

	if(Regemail.test(emailval)) {
		$('.Email1')[0].innerHTML= "输入正确";
		$('.Email1').css("color","green");
	}else {
		$('.Email1')[0].innerHTML= "输入错误";
		$('.Email1').css("color","red");
	};
})