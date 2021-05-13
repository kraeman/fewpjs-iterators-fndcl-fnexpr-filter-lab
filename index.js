const findMatching = (drivers, name) => {
    let thing = drivers.filter(n => {
        return n.toUpperCase() === name.toUpperCase()
    })
    return thing
}

const fuzzyMatch = (drivers, letters) => {
    let thing = drivers.filter(n => {
        return n.startsWith(letters, 0)
    })
    return thing
}
const matchName = (drivers, nam) => {
    let thing = drivers.filter(n => {
        return n.name === nam
    })
    return thing
}