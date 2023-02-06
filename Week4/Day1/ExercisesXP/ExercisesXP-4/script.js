

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];


colors.forEach((item, index) => {
      console.log(`${index}# choice is ${item}`);
});
   

let result = colors.some((item)=> item == "Violet") 
if(result)  {
     console.log("Yeah") 
} else {
     console.log("No...");
}