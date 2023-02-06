

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((item, index) => {
    let ord = index + 1 <= 3 ? ordinal[index + 1] : ordinal[0]
    console.log(`${index+1}${ord} choice is ${item}`);
});