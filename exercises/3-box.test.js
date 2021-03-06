const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  toString: () => `Box(${x})`,
})

// Exercise: Box
// Goal: Refactor each example using Box
// Keep these tests passing!
// Bonus points: no curly braces

// Ex1: Using Box, refactor moneyToFloat to be unnested.
// =========================
const moneyToFloat = str => parseFloat(str.replace(/\$/, ''))

test('Ex1: moneyToFloat', () => {
  expect(String(moneyToFloat('$5.00'))).toBe('5')
})

// Ex2: Using Box, refactor percentToFloat to remove assignment
// =========================
const percentToFloat = str => {
  const float = parseFloat(str.replace(/\%/, ''))
  return float * 0.01
}

test('Ex2: percentToFloat', () => {
  expect(String(percentToFloat('20%'))).toBe('0.2')
})

// Ex3: Using Box, refactor applyDiscount (hint: each variable introduces a new Box)
// =========================
const applyDiscount = (price, discount) => {
  const cents = moneyToFloat(price)
  const savings = percentToFloat(discount)
  return cents - cents * savings
}

test('Ex3: Apply discount', () => {
  expect(String(applyDiscount('$5.00', '20%'))).toBe('4')
})
