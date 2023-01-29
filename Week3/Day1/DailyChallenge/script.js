
let planets = ["Mercury ", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

for (const planet of planets) {
    let div = document.createElement("div")
    div.classList.add("planet")
    div.classList.add(planet.toLowerCase())
    document.body.firstElementChild.appendChild(div)
}

/* 




Bonus: Do the same process to create the moons.
Be careful, each planet has a certain amount of moons. How should you display them?
Should you still use an array for the planets ? Or an array of objects ? */