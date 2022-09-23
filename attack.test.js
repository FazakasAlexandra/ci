const attack = require('./attack');

test('should return dmg sentence when called correctly', () => {
  const result = attack('Smelly ogre', 23);
  // expect(result).toBe('Smelly ogre dealt 23 dmg')
  expect(result).toMatch(/^Smelly ogre(.*)23/);
});
