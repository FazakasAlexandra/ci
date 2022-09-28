const attack = (name, dmg, isCrit) => `${name} dealt ${isCrit ? dmg * 2 : dmg} dmg`;

module.exports = attack;
