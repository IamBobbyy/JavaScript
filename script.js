// Random racenumber 0-999
function checkRace (){
 let raceNumber = Math.floor(Math.random() * 1000);
 const registeredEarly = false;
 const age = 20;

 let resultText = '';

 if (age > 18){ // Chcek age
   if(registeredEarly) {
     raceNumber += 1000;
     resultText = `Early adults run at 9:30 am: Your raceNumber = ${raceNumber}`;
   } else {
     resultText = `Late adults run at 11:00 am: Your raceNumber = ${raceNumber}`;
   } 
 } else if(age < 18){
     resultText = `Youth registrants run at 12:30 pm: Your raceNumber = ${raceNumber}`;
   } else {
     resultText = 'Contact at the registration desk';
   }

   document.getElementById('result').innerHTML = resultText;
}