const withinHours = (time, hours) => {
    return time > Date.now() - 3600000 * hours
}


const highest = (readings) => {
    if(readings.length === 0) return null

    return readings
        .reduce((highest, current) =>
            highest.temperature > current.temperature ?
                highest : current
        )
}

const lowest = (readings) => {
    if(readings.length === 0) return null

    return readings
        .reduce((lowest, current) =>
            lowest.temperature < current.temperature ?
                lowest : current
        )
}

const average = (readings) => {
    if(readings.length === 0) return null

    const sum = readings
        .map(r => r.temperature)
        .reduce((accumulator, currentValue) => accumulator + currentValue)
    return (sum * 1.0) / readings.length
}

module.exports = {
    withinHours,
    highest,
    lowest,
    average
}