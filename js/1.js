$(function(){
	$("#wu_a4").mouseover(function(){
	$("#wu_a5").css("color","orange");
	$("#wu_a4").css("background-color","white");
	$("#wu_a6").css("background-color","white");
	$("#wu_a6").slideDown(200);
})
$("#wu_a7").mouseleave(function(){
	$("#wu_a5").css("color"," #B0B0B0");
	$("#wu_a4").css("background-color","#424242");
	$("#wu_a6").slideUp(200);
	
})
$("#wu_b6").mouseover(function(){
	$(".wu_b3").slideUp(1000);
})
$("#wu_b8").mouseover(function(){
	$(".wu_b3").slideUp(1000);
})
$("#wu_b1").mouseover(function(){
	$(".wu_b3").slideUp(1000);
})
$("#wu_b2").mouseover(function(){
	$(".wu_b3").slideUp(1000);
})
//$("#wu_b6").mouseleave(function(){
//	$("#wu_b6").css("onblur","hide");
//})
$("#wu_b6").focus(function(){
	$(".wu_b11").css("display","block");
	$("#wu_b7").css("display","block");
	$("#wu_b5").css("border-color","orangered");
	$("#wu_b6").css("border-color","orangered");
})
$("#wu_b6").blur(function(){
	$(".wu_b11").css("display","none");
	$("#wu_b7").css("display","none");
	$("#wu_b5").css("border-color","gainsboro");
	$("#wu_b6").css("border-color","gainsboro");
})
$("#wu_b5").mouseover(function(){
	$("#wu_b5").css("background-color","orangered").css("transition","0.3s");
	$("#wu_b8").css("color","white");
})
$("#wu_b5").mouseleave(function(){
	$("#wu_b5").css("background-color","white");
	$("#wu_b8").css("color","black");
})
$("a").click(function(){
	$("a").css("text-decoration","none");
})
$(".wu_b9").mouseover(function(){
	$(this).css("background-color","orangered").css("color","white");
})
$(".wu_b9").mouseout(function(){
	$(this).css("background-color","#EEEEEE").css("color","gray");
})
$(".wu_b10").mouseover(function(){
	$(this).css("background-color","#F3F3F3");
})

$(".wu_b10").mouseleave(function(){
	$(this).css("background-color","white");
})
$(".wu_b15").mouseover(function(){
		var ind=$(this).index();
		$(".wu_b3").css("display","none");
		$(".wu_b3").eq(ind-2).slideDown(1000);
})

$("#wu_b").mouseleave(function(){
	$(".wu_b3").slideUp(1000);
})
$(".wu_e2").mouseover(function(){
	$(".wu_e2").css("color","orangered");
})
$(".wu_e2").mouseout(function(){
	$(".wu_e2").css("color","black");
})
$(".wu_e2").click(function(){
	$(".wu_e2").attr("disabled","disabled");
	$(".wu_e2").css("color","darkgray");
	$(".wu_e1").attr("disabled",false);
	$(".wu_e1").css("color","black");
	$(".wu_fff").fadeOut(1000);
	$(".wu_ff").fadeIn(1000);
})

$(".wu_e1").mouseover(function(){
	$(".wu_e1").css("color","orangered");
})
$(".wu_e1").mouseout(function(){
	$(".wu_e1").css("color","black");
})
$(".wu_e1").click(function(){
	$(".wu_e2").attr("disabled",false);
	$(".wu_e2").css("color","black");
	$(".wu_e1").attr("disabled","disabled");
	$(".wu_e1").css("color","darkgray");
	$(".wu_ff").fadeOut(1000);
	$(".wu_fff").fadeIn(1000);
})
$(".wu_g2").mouseover(function(){
	$(".wu_g4").css("color","orangered");
	$(".wu_g3").css("background-color","orangered");
})
$(".wu_g2").mouseout(function(){
	$(".wu_g4").css("color","black");
	$(".wu_g3").css("background-color","darkgray");
})
$(".wu_h8").mouseover(function(){
	$(this).css("box-shadow","2px 11px 22px 4px gainsboro");
	$(this).css("position","relative");
	$(this).css("top","-5px");
})
$(".wu_h8").mouseout(function(){
	$(this).css("box-shadow","");
	$(this).css("position","relative");
	$(this).css("top","0px");
})
$(".wu_j3").mouseover(function(){
	$(this).css("box-shadow","2px 11px 22px 4px gainsboro");
	$(this).css("position","relative");
	$(this).css("top","-5px");
	$(this).find($(".wu_j8")).css("bottom","0px");
	$(this).find($(".wu_jj8")).css("bottom","0px");
})
$(".wu_j3").mouseout(function(){
	$(this).css("box-shadow","");
	$(this).css("position","relative");
	$(this).css("top","0px");
	$(this).find($(".wu_j8")).css("bottom","-75px");
	$(this).find($(".wu_jj8")).css("bottom","-75px");
})
$(".wu_j11").mouseover(function(){
	$(this).css("box-shadow","2px 11px 22px 4px gainsboro");
	$(this).css("position","relative");
	$(this).css("top","-5px");
})
$(".wu_j11").mouseout(function(){
	$(this).css("box-shadow","");
	$(this).css("position","relative");
	$(this).css("top","0px");
})
$(".wu_j5").mouseover(function(){
	$(this).css("box-shadow","2px 11px 22px 4px gainsboro");
	$(this).css("position","relative");
	$(this).css("top","-5px");
})
$(".wu_j5").mouseout(function(){
	$(this).css("box-shadow","");
	$(this).css("position","relative");
	$(this).css("top","0px");
})
$("#wu_ii1").mouseover(function(){
	$(".wu_jjj").css("opacity","1");
	$(".wu_jjjq").css("display","none");
	$(".wu_jjjqq").css("display","none");
	$(".wu_jjjqqq").css("display","none");
	$(this).css("color","orangered");
	$(this).css("border-bottom-color","orangered");
})
$("#wu_ii1").mouseout(function(){
	$(this).css("color","black");
	$(this).css("border-bottom-color","white");
})
$("#wu_ii2").mouseover(function(){
	$(".wu_jjj").css("opacity","0");
	$(".wu_jjjq").css("display","block");
	$(".wu_jjjqq").css("display","none");
	$(".wu_jjjqqq").css("display","none");
	$("#wu_ii1").css("color","black");
	$("#wu_ii1").css("border-bottom-color","white");
})
$("#wu_ii3").mouseover(function(){
	$(".wu_jjj").css("opacity","0");
	$(".wu_jjjq").css("display","none");
	$(".wu_jjjqq").css("display","block");
	$(".wu_jjjqqq").css("display","none");
		$("#wu_ii1").css("color","black");
	$("#wu_ii1").css("border-bottom-color","white");
})
$("#wu_ii4").mouseover(function(){
	$(".wu_jjj").css("opacity","0");
	$(".wu_jjjq").css("display","none");
	$(".wu_jjjqq").css("display","none");
	$(".wu_jjjqqq").css("display","block");
	$("#wu_ii1").css("color","black");
	$("#wu_ii1").css("border-bottom-color","white");
})
$(".wu_o2").click(function(){
	$(".wu_pa").fadeOut(400);
	$(".wu_pp").fadeIn(400);
	$(".wu_o2").attr("disabled","disabled");
	$(".wu_o2").css("color","darkgray");
	$(".wu_o1").attr("disabled",false);
	$(".wu_o1").css("color","black");
})
$(".wu_o1").click(function(){
	$(".wu_pa").fadeIn(400);
	$(".wu_pp").fadeOut(400);
	$(".wu_o2").attr("disabled",false);
	$(".wu_o2").css("color","black");
	$(".wu_o1").attr("disabled","disabled");
	$(".wu_o1").css("color","darkgray");
})
$(".wu_o1").mouseover(function(){
	$(".wu_o1").css("color","orangered");
})
$(".wu_o1").mouseout(function(){
	$(".wu_o1").css("color","black");
})
$(".wu_o2").mouseover(function(){
	$(".wu_o2").css("color","orangered");
})
$(".wu_o2").mouseout(function(){
	$(".wu_o2").css("color","black");
})
$(".wu_pb").mouseover(function(){
	$(this).css("position","relative");
	$(this).css("top","-2px");
})
$(".wu_pb").mouseout(function(){
	$(this).css("position","relative");
	$(this).css("top","0px");
})

var y_dat1 = 0;
//	function y_shijiancha(){
		$(".gouwu").mouseover(function(){
			var y_dat = new Date();
			var y_dat2 = y_dat.getTime()
			
			if((y_dat2-y_dat1)>1000){
				$(".gouwu").css("background-color","white");
				$(".gouwu a,.glyphicon-shopping-cart").css("color","orange");
				$(".gouwu1").slideDown(500);
			}else{
				return false;
			}
			y_dat1=y_dat2;
		})
		$(".gouwu").mouseleave(function(){
			$(".gouwu").css("background-color","#424242");
			$(".gouwu a,.glyphicon-shopping-cart").css("color","#B0B0B0");
			$(".gouwu1").slideUp(500);
		})
	
		

	$(".body_inp").focus(function(){
		$(".body_inp").css("border","1px solid #FF6700");
		$(".body_serch").css("border","1px solid #FF6700");
		$(".serch_cnt a").fadeOut(800);
		$(".inp_xia").fadeIn(300);
		$(".inp_xia_2").fadeIn(300);
	})
	$(".body_inp").blur(function(){
		$(".serch_cnt a").fadeIn(800);
		$(".inp_xia").fadeOut(300);
		$(".inp_xia_2").fadeOut(300);
		$(".body_inp").css("border","1px solid #E0E0E0");
		$(".body_serch").css("border","1px solid #E0E0E0");
	})
	$(".body_serch").mouseover(function(){
		$(".body_serch").css("background-color","#FF6700");
		$(".body_serch").css("color","white");
	})
	$(".body_serch").mouseout(function(){
		$(".body_serch").css("background-color","white");
		$(".body_serch").css("color","darkgray");
	})
	
	///////////////////////////////////////////////////
	
	$(".dc").mouseenter(function(){
		var ind=$(this).index();
		$(".dd").css("display","none");
		$(".dd").eq(ind).slideDown(300);
		
	})
	$(".dd").mouseleave(function(){
		$(".dd").slideUp(500);
		
	})
	
	$(".qian1").mouseover(function(){
		$(".shen2").css("display","block");

	})
	$(".qian1").mouseout(function(){
		$(".shen2").css("display","none");
	})
	
	$(".qian2").mouseover(function(){
		$(".shen1").css("display","block");
	})
	$(".qian2").mouseout(function(){
		$(".shen1").css("display","none");
	})
	
	
	var img_i=0;
	$(".qian1").click(function(){
		clearInterval(timekd);
		if(img_i==0){
				img_i=5;
			}
			img_i--;
			$('.imgdd').css("display","none");
			$(".imgdd").eq(img_i).fadeIn(1000);
			$(".kd").css("list-style-type","circle");
			$(".kd").eq(img_i).css("list-style-type","disc");	
			
			
	})
	
	$(".qian2").click(function(){
		clearInterval(timekd);
			img_i++;
			if(img_i==5){
				img_i=0;
			}
			$('.imgdd').css("display","none");
			$(".imgdd").eq(img_i).fadeIn(1000);
			$(".kd").css("list-style-type","circle");
			$(".kd").eq(img_i).css("list-style-type","disc");
			
		
	})
	var kds=0;
	var timekd;
	$(".kd").click(function(){
		clearInterval(timekd);
		var img_di=$(this).index();
		img_i = img_di;
		$(".imgdd").css("display","none");
		$(".imgdd").eq(img_di).fadeIn(1000);
		$(".kd").css("list-style-type","circle");
		$(this).css("list-style-type","disc");
		
	})
	
	timekd=setInterval(function(){
		kds++;
		if(kds==5){
			kds=0;
		}
		img_i = kds;
		$(".kd").css("list-style-type","circle");
		$(".kd").eq(kds).css("list-style-type","disc");	
		$(".imgdd").css("display","none");
		$(".imgdd").eq(kds).fadeIn(800);
	},3000);
	
	/////////////////////////////////////////////////////
	////////////////////////body_leftcontet///////////////////////////
	/////////////////////////////////////////////
	$(".bd_lt_li").mouseenter(function(){
		var bdlt=$(this).index();
		$(".body_lefcont").css("display","none");
		$(".body_lefcont").eq(bdlt).css("display","block");
		$(".qian1").css("display","none");
		
	})
	$(".body_lefcont").mouseleave(function(){
		$(".body_lefcont").css("display","none");
	})
	$(".body_2left").mouseleave(function(){
		$(".body_lefcont").css("display","none");
		$(".qian1").css("display","block");
	})



$(".ycl_9a").wrap("<div class='ycl_9wai y_kuaiji'></div>");
	$(".ycl_9a").addClass("y_yinying ycl_over");
	$(".y_piaofu").mouseover(function(){
		$(this).addClass("y_piaofu_a");
	});
	$(".y_piaofu").mouseout(function(){
		$(this).removeClass("y_piaofu_a");
	});
	
	$(".ycl_9a").mouseover(function(){
		$(this).find(".ycl_9zh").addClass("ycl_nx1");
		$(this).find(".ycl_9zh").removeClass("ycl_nx3 ycl_nx2");
	});
	$(".ycl_9zh").mouseover(function(){
		$(this).find(".ycl_9zh").addClass("ycl_nx2");
		$(this).find(".ycl_9zh").removeClass("ycl_nx3 ycl_nx1");
	});
	$(".ycl_9zh").mouseout(function(){
		$(this).find(".ycl_9zh").removeClass("ycl_nx3");
	});
	$(".ycl_9a").mouseover(function(){
		$(this).find(".ycl_9zh").removeClass("ycl_nx3");
	});
	$(".ycl_9wai").mouseout(function(){
		$(this).find(".ycl_9zh").addClass("ycl_nx3");
		$(this).find(".ycl_9zh").removeClass("ycl_nx1 ycl_nx2");
	});
	$(".y_yinying").mouseover(function(){
		$(this).addClass("y_yinying_a");
	});
	$(".y_yinying").mouseout(function(){
		$(this).removeClass("y_yinying_a");
	});
	$(".y_yinying1").mouseover(function(){
		$(this).addClass("y_yinying_a1");
	});
	$(".y_yinying1").mouseout(function(){
		$(this).removeClass("y_yinying_a1");
	});
	$(".ycl_qiehuan1").mouseover(function(){
		$(".ycl_qiehuan1").find("a").removeClass("ycl_qiehuan1_1");
		$(this).find("a").addClass("ycl_qiehuan1_1");
		$(".ycl_beihuan1").css("display","none");
		var i = $(this).index();
		$(".ycl_beihuan1").eq(i).css("display","block");
	});
	$(".ycl_qiehuan2").mouseover(function(){
		$(".ycl_qiehuan2").find("a").removeClass("ycl_qiehuan2_1");
		$(this).find("a").addClass("ycl_qiehuan2_1");
		$(".ycl_beihuan2").css("display","none");
		var i = $(this).index();
		$(".ycl_beihuan2").eq(i).css("display","block");
	});








})

