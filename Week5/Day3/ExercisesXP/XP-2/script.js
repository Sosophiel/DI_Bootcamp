// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');

    }, 4000)


}).catch(err => {
    console.log(err, "Ooops something went wrong")
})


setTimeout(() => {
    const res = Promise.resolve('success')
    console.log(res);
}, 8000)

