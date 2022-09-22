const attack = (name, dmg, isCrit) => {
    return `${name} dealt ${isCrit ? dmg * 2 : dmg} dmg`
}

module.exports = attack