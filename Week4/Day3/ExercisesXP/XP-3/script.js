

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];


const result = epic.reduce((accumulator, element) => accumulator + " " + element);


console.log(result);

/* 
Use the reduce() method to combine all of these into a single string.
 */