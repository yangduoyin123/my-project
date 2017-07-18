/*轮播图*/
$(function() {
	var index = 0; //定义变量index的值为0
//	$(".ul_lunbo li").hover(function() { //给按钮绑定的hover方法
//		index = $(this).index();
//		$(this).addClass("on").siblings().removeClass("on"); //给按钮li标签添加类名 实现css样式
//		$(".lb").eq(index).stop(true).fadeIn().siblings().stop(true).fadeOut();
//		//给图片显示设置css3样式siblings()获取集合中的每一个元素
//	});
	setInterval(function() {
		index++;
		if(index > 2) { //当图片的索引大于7的时候让他自身的索引值重新变为0
			index = 0;
		}
//		$(".ul_lunbo li").eq(index).addClass("on").siblings().removeClass("on");
		$(".lb").eq(index).stop(true).fadeIn().siblings().stop(true).fadeOut();
	}, 5000);
})