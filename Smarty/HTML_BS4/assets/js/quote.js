// INDEX SELECT OPTIONS -----------------------------------------------------------


$("#buildingproject").change(function(){
		if($(this).val() =="selectoption"){		
			$("#index1").hide();
			$("#index2").hide();
			$("#index3").hide();
			$("#index4").hide();
			}
		
		else if($(this).val() =="residential"){
			$("#index1").show();
			$("#index2").hide();
			$("#index3").hide();
			$("#index4").hide();
			}	

		else if($(this).val() =="commercial"){
			$("#index1").hide();
			$("#index2").show();
			$("#index3").hide();
			$("#index4").hide();
			}

		else if($(this).val() =="corporate"){
			$("#index1").hide();
			$("#index2").hide();
			$("#index3").show();
			$("#index4").hide();
			}

		else if($(this).val() =="hybrid"){
			$("#index1").hide();
			$("#index2").hide();
			$("#index3").hide();
			$("#index4").show();
			}
	});
$("#buildingproject").trigger("change");


// INDEX SELECT OPTIONS ------------------------------------------------------

// TESTS --------------------------------------------------------------------------------------

// $(document).ready(function(){
// 	$("#buildingproject").change(function(){
// 		$( "select option:selected").each(function(){
// 			if($(this).attr("value")=="red"){
// 				$(".box").hide();
// 				$(".red").show();
// 			}
// 			if($(this).attr("value")=="green"){
// 				$(".box").hide();
// 				$(".green").show();
// 			}
// 			if($(this).attr("value")=="blue"){
// 				$(".box").hide();
// 				$(".blue").show();
// 			}
// 			if($(this).attr("value")=="yellow"){
// 				$(".box").hide();
// 				$(".yellow").show();
// 			}
// 		});
// 	}).change();
// });

// TESTS --------------------------------------------------------------------------------------



// 	FONCTION CALCUL ---------------------------------------------------------------------------