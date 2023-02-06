/* 
function winBattle(){
    return true;
}
 */

let winBattle = () => true;
let experiencePoints = 0

winBattle() ? experiencePoints = 10 : experiencePoints = 1;


if(winBattle()) {
    experiencePoints = 10;
} 
else {
     experiencePoints = 1;
}


console.log("experiencePoints", experiencePoints);
