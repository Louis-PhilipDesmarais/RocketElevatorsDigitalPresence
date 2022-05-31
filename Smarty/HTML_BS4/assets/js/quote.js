

// SELECT OPTIONS 


$("#buildingproject").change(function(){
		if($(this).val() =="residential"){
			$("#buildingproject").show();

		}
		else{
			$("#index1").hide();
			$("#index2").hide();
			$("#index3").hide();
			$("#index4").hide();
		

		}
	});
$("#buildingproject").trigger("change");


// INDEX SELECT OPTIONS ------------------------------------------------------

// INDEX RESIDENTIAL ---------------------------------------------------------


	$("#buildingproject").change(function(){
			if($(this).val() =="residential"){
				$("#index1").show();

			}
			else{
				$("#index2").hide();
				$("#index3").hide();
				$("#index4").hide();
				

			}
		});
	$("#buildingproject").trigger("change");


// INDEX RESIDENTIAL ---------------------------------------------------------

// INDEX COMMERCIAL ----------------------------------------------------------


$("#buildingproject").change(function(){
		if($(this).val() =="commercial"){
			$("#index2").show();

		}
		else{
			$("#index1").hide();
			$("#index3").hide();
			$("#index4").hide();
		

		}
	});
$("#buildingproject").trigger("change");


// INDEX COMMERCIAL -----------------------------------------------------------

// INDEX CORPORATE ------------------------------------------------------------


$("#buildingproject").change(function(){
		if($(this).val() =="corporate"){
			$("#index3").show();

			}
			else{
				$("#index1").hide();
				$("#index3").hide();
				$("#index4").hide();
				

			}
	});
$("#buildingproject").trigger("change");


// INDEX CORPORATE -------------------------------------------------------------

// INDEX HYBRID ----------------------------------------------------------------


$("#buildingproject").change(function(){
		if($(this).val() =="hybrid"){
			$("#index4").show();

		}
		else{
			$("#index2").hide();
			$("#index3").hide();
			$("#index4").hide();
		

		}
	});
$("#buildingproject").trigger("change");


// INDEX HYBRID ----------------------------------------------------------------


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
console.log("hello world")
console.log("is it working")