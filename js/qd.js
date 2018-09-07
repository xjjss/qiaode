$(function () {



	/*首页 团队风采*/

	$('.team-list li').hover(function () {


		$(this).find('b').stop(!1).animate({bottom: 0}, 'fast');

	}, function () {

		$(this).find('b').stop(!1).animate({bottom: -90}, 'fast');
	})




	/*进入焦点时触发*/

	$(".contact_apply .info input,.common-input").focus(function () {
		var oldValue = $(this).val()
		if (oldValue == this.defaultValue) {
			$(this).val("")
		}
	})
	/*失去焦点时触发*/
	$(".contact_apply .info input,.common-input").blur(function () {
		var oldValue = $(this).val()
		if (oldValue == "") {
			$(this).val(this.defaultValue)
		}
	})



	/*news*/

	$('.news_list li').hover(function(){

		$('.news_list li').removeClass('cur');
		$(this).addClass('cur');


	})


	/*team*/


	var flag=true;

	$('.joint li').find('em').click(function(){

		if(flag){
			$(this).html('-');
			$(this).parents('.joint li').find('.joint_info').show();
		}else{

			$(this).html('+');
			$(this).parents('.joint li').find('.joint_info').hide();
			flag=true;
		}
		flag=!flag;
	})



})