const withinHours = (time, hours) => {
    return time < Date.now() - 3600000 * hours
}


const highest = (readings) => {

}

const lowest = (readings) => {

}

const average = (readings) => {

}

module.exports = {
    withinHours,
    latestReading,
    highest,
    lowest,
    average
}