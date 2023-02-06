let bankAmount = 1000
let VAT = 0.17



const expenses = ["+200", "-100", "+146", "+167", "-2900"]

expenses.forEach(detail => { 
    bankAmount += Number(detail) * VAT
})

console.log(bankAmount)
