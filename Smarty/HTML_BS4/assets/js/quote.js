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
			calculateprice()
			}	

		else if($(this).val() =="commercial"){
			
			$("#index1").hide();
			$("#index2").show();
			$("#index3").hide();
			$("#index4").hide();
			calculcommercial();
			calculateprice()
			}

		else if($(this).val() =="corporate"){
			$("#index1").hide();
			$("#index2").hide();
			$("#index3").show();
			$("#index4").hide();
			calculcoporatehybrid()
			calculateprice()
			}

		else if($(this).val() =="hybrid"){
			$("#index1").hide();
			$("#index2").hide();
			$("#index3").hide();
			$("#index4").show();
			calculcoporatehybrid()
			calculateprice()
			}
	});
$("#buildingproject").trigger("change");


// END INDEX SELECT OPTIONS ------------------------------------------------------

// 	FONCTION CALCUL ---------------------------------------------------------------------------
	
		function calculresidential(){  
			
			$("#nbrapartmentsresidential").change(function(){
			$("#nbrabovegroundresidential").change(function(){
			$("#nbrbasementsresidential").change(function(){
		   
			numberapartements = 0
			numberfloor = 0
			residentialelevator = 0
			cageelevator = 0
			amountelevator = 0
			numberelevator = 0

			numberapartements = $("#nbrapartmentsresidential").val();
			numberfloor = $("#nbrabovegroundresidential").val();
			residentialelevator = $("#nbrbasementsresidential").val();	

			cageelevator = Math.ceil(numberfloor / 20 );			
			numberelevator = Math.ceil(numberapartements / numberfloor / 6 );
		
			amountelevator = (numberelevator * cageelevator);
			
			$("#quantity").val(amountelevator);
			
			});
			});
			});			
			}
		
		function calculcommercial(){
	
			var elevatorneeded = 0
				$("#nbrelevatorcommercial").change(function(){
		
				elevatorneeded = $("#nbrelevatorcommercial").val();
		
				$("#quantity").val(elevatorneeded)
		
			});	
			}

		function calculcoporatehybrid(){ 
		   			
			$("#nbrcompanies").change(function(){
			$("#nbrfloors").change(function(){
			$("#nbrbasements").change(function(){

			numelevator = 0
				numofbasements = 0
			nbrfloorbasements = 0
				numbercompagnie = 0			
			numbercolumns = 0
			averageelevatorcolumns = 0
			totalnbroccupants = 0
			totalelevatorneeded = 0
		    
			numelevator = $("#nbrcompanies").val();
			nrbfloorbasements = $("#nbrfloors").val();
			averageelevatorcolumns = $("#nbrbasements").val();
			numbercolumns = $("#nbroccupants").val();

			console.log(numelevator)
			console.log(nrbfloorbasements)
			console.log(averageelevatorcolumns)
			console.log(totalnbroccupants )
			console.log(totalelevatorneeded )

			numelevator = math.ceil(totalnbroccupants / 1000 );
			numbercolumns = math.ceil(nbrfloorbasements / 20 );
			averageelevatorcolumns = math.ceil(numelevator / numbercolumns );
			totalelevatorneeded = math.ceil(averageelevatorcolumns * numbercolumns);

			console.log(numelevator)
			console.log(numbercolumns)
			console.log(averageelevatorcolumns)
			console.log(totalelevatorneeded)

			$("#quantity").val(totalelevatorneeded);
						
			});
			});
			});			
			}
// 	END FONCTION CALCUL ---------------------------------------------------------------------------
//  CULCUL PRICE ----------------------------------------------------------------------------------

		function calculateprice(){

			elevatorprice = 0

			$("#quantity").change(function(){
			if($(this).val() =="#quantity")


				fees = 7565

			$("#quantity").change(function(){
			if($(this).val() =="#quantity")


				fees = 12345

			$("#quantity").change(function(){
			if($(this).val() =="#quantity")


				fees = 15400

			$("#pricefees")	= elevatorprice

		});
		});		
		});
		};
//  END CALCAL PRICE --------------------------------------------------------------------------
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