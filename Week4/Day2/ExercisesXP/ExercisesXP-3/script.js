
(function (children, name, place, job) {
    document.getElementById('teller').textContent = `You will be a ${job} in ${place}, and married to ${name} with ${children} kids.`
    ;
})(4,"David", "Paris","Chef")

/* 
Create a self invoking function that takes 4 arguments: 
number of children, partner’s name, geographic location, job title.

The function should display in the DOM a sentence like 
"You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
 */

