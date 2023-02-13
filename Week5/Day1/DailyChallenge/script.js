/* Create a form with two fields (name, last name) and a submit button.
When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.

 */

let jsonString = JSON.stringify({
    name: document.getElementById("name").value,
    lastName: document.getElementById("lastName").value
    
});

const stringDom = JSON.stringify(jsonString, null, 2);