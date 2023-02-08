
const users = { user1: 18273, user2: 92833, user3: 90315 }


let myArr = []

for (const key in users) {
    const value = users[key]
    myArr.push([key, value])

}

let myArr2 = []

for (const key in users) {
    const value = users[key]
    myArr2.push([key, value * 2])

}

/* 
Using methods taught in class, turn the users object into an array: 
Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
FYI : The number is their ID number.

Modify the outcome of part 1, by multipling the user’s ID by 2.
Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ] */