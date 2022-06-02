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
			calculresidential();
			}	

		else if($(this).val() =="commercial"){
			
			$("#index1").hide();
			$("#index2").show();
			$("#index3").hide();
			$("#index4").hide();
			calculcommercial();
			}

		else if($(this).val() =="corporate"){
			$("#index1").hide();
			$("#index2").hide();
			$("#index3").show();
			$("#index4").hide();
			calculcoporatehybrid()
			}

		else if($(this).val() =="hybrid"){
			$("#index1").hide();
			$("#index2").hide();
			$("#index3").hide();
			$("#index4").show();
			calculcoporatehybrid()
			}
	});
$("#buildingproject").trigger("change");


// END INDEX SELECT OPTIONS ------------------------------------------------------

// 	FONCTION CALCUL ---------------------------------------------------------------------------

	function calculcommercial(){
	
		var elevatorneeded = 0
			$("#nbrelevatorcommercial").change(function(){

       	 	elevatorneeded = $("#nbrelevatorcommercial").val();

			$("#quantity").val(elevatorneeded)

			});	
			}

	function calculresidential(){  
			$("#quantity").change(function(){
		    numberapartements = $("#nbrapartmentsresidential").val();
			numberfloor = $("#nbrabovegroundresidential");
			residentialelevator = $("#nbrbasementsresidential");
			
			cageelevator = Math.ceil(numberfloor / 20);

			numberelevator = Math.ceil(numberapartements / numberfloor / 6);

			amountelevator = numberelevator * cageelevator;
			$("#quantity").val(amountelevator);

		
			});	
			}
			
	function calculcoporatehybrid(){ 
		    $("#quantity").change(function(){

			numelevator = 0
			numofbasements = 0
			nbrfloorbasements = 0
			numbercompagnie = 0			
			numbercolumns = 0
			numelevator = 0
			averageelevatorcolumns = 0
			totalnbroccupants = 0
			totalelevatorneeded = 0
		    
			numelevator = (totalnbroccupants / 1000 );
			numbercolumns = (nbrfloorbasements / 20 );
			averageelevatorcolumns = (numelevator / numbercolumns );
			totalelevatorneeded = (averageelevatorcolumns * numbercolumns);

			$("#quantity").val(totalelevatorneeded);

	    	 });
			 }

// 	END FONCTION CALCUL ---------------------------------------------------------------------------

// notes
// totalresidential = $("#quantity").val(amountelevator) * residentialelevator;
// 			$("#priceofelevator").val(totalresidential);






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

// END TESTS --------------------------------------------------------------------------------------

// $("nbrapartments").change(fonction(){