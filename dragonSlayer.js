	//Dragon Slayer. A JS based combat simulator by Brandon Phillips, 4/18/16
   
//Opening confirmation
var playConf=confirm("Press OK to begin")
   
//Combat loop
while(playConf){
	
		alert("First, select your weapon and a dragon to battle.")
		
		//Setting varables
		
		Gold variables
		
		var totalGold= 100
		
		var leatherArmor=25
		var ironArmor=50
		var diamondArmor=75
		
		var stoneSword=25
		var ironSword=50
		var diamondSword=75
		
		
		
		var weapon=prompt("Select weapon- Bow (high accuracy), Sword (balanced) or Spear (high damage)","Bow, sword or spear").toUpperCase()
		//weapon selection
		switch(weapon){
			case 'SWORD':
			var accuracyStat=6;
			var vitalityStat=7;
			var strengthStat=6;
			break;
			
			case 'BOW':
			var accuracyStat=10;
			var vitalityStat=4;
			var strengthStat=4;
			break;
			
			case 'SPEAR':
			var accuracyStat=4;
			var vitalityStat=6;
			var strengthStat=15;
			break;
			
			default:
			weapon=prompt("Please check spelling. Do you choose bow, spear or sword?").toUpperCase();
		}
		
		
		var dragon=prompt("Select dragon to battle. Egg (Practice), whelp (easy), yearling (medium), or adult (hard)","Egg, whelp, yearling, or adult").toUpperCase()
		//dragon selection
		switch(dragon){
		
			case 'EGG':
			var dragonHealth=50;
			var dragonStrength=0;
			break;
			
			case 'WHELP':
			var dragonHealth=10;
			var dragonStrength=2;
			break;
			
			case 'YEARLING':
			var dragonHealth=20;
			var dragonStrength=5;
			break;
			
			case 'ADULT':
			var dragonHealth=50;
			var dragonStrength=10;
			break;
			
			default:
			dragon=prompt("Please check spelling.","Egg, whelp, yearling, or adult?").toUpperCase();
		}
		
		
		var accuracy= Math.random() * accuracyStat

		var youHit= Math.floor(accuracy * 2)

		var damageThisRound=Math.floor(Math.random()*strengthStat + 1)

		var totalDamage= 0
		
		var totalPlayerDamage= 0
		
		var dragonDamageThisRound=Math.floor(Math.random()* dragonStrength)
		
		
		//Not a number input check
		
		if(isNaN(accuracyStat)){
			
			accuracyStat=prompt("Please enter a value for your accuracy stat.","1-10");
			
		}else if(isNaN(strengthStat)){
			
			strengthStat=prompt("Please enter a value for your strength stat.","1-10");
			
		}else if(isNaN(vitalityStat)){
			
			vitalityStat=prompt("Please enter a value for your vitality stat.","1-10");
			
		}else if(isNaN(dragonHealth)){
			
			dragonHealth=prompt("Please enter a value for the Dragon's Health.","Easy-5, Meduim-20, Hard-50");
			
		}else if(isNaN(dragonStrength)){
			
			dragonStrength=prompt("Please enter a value for the Dragon's Strength.","Easy-1, Medium-5, Hard-10");
		}
		//If inputs are numbers
		else{
			
			var slaying= confirm("Ready to attack?")
			
			
			//Combat simulation
			while(slaying) {
				//successful hit
				if (youHit>3) {
					alert("Your attack hit!");
					//Dragon damage calculation
					totalDamage+=damageThisRound
					//Dragon slayed
					if(totalDamage>=dragonHealth){
						alert("You defeated the Dragon! Huzzah for you, mighty button clicker!");
						slaying=false
						playConf=confirm("Play again?")
					}
						//dragon damaged
						else{
							alert("Your attack did "+damageThisRound+" damage, but the dragon still lives! Dragon health remaining: "+(dragonHealth-totalDamage))
							
							accuracy= Math.random() * accuracyStat
							
							youHit= Math.floor(accuracy * 2)
							
							slaying= confirm("Attack again?")
							
							damageThisRound=Math.floor(Math.random()*strengthStat + 1)
							
							
						}
					
				} 
				//Unsuccessful hit
				else {
					alert("Your attack missed!");
					
					totalPlayerDamage+=dragonDamageThisRound
					//Player killed
					if(totalPlayerDamage>=vitalityStat){
						alert("You have no health remaining. The dragon has defeated you and is snacking on your bones. You lose...")
						slaying=false;
						playConf=confirm("Play again?")
					}
					//Player damaged
					else{
						alert("The dragon has hit you for "+ dragonDamageThisRound + ". You have "+(vitalityStat-totalPlayerDamage)+" health remaining.")
						
						accuracy= Math.random() * accuracyStat
						
						youHit= Math.floor(accuracy * 2)
						
						slaying=confirm("Attack again?")
					}
					
				}
				
			}
		
		}
		
	}
	//Thanks for viewing!
	alert("Thanks for Playing!")