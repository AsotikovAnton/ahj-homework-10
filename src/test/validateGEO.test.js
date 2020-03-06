import validateGEO from '../js/validateGEO';

test.each([
  ['true for valid GEO', '51.50851, −0.12572', true],
  ['true for valid GEO', '51.50851,−0.12572', true],
  ['true for valid GEO', '[51.50851, −0.12572]', true],
  ['false for invalid GEO', '99.50851,−191.12572', false],
])(('Validate GEO %s'), (_, input, expected) => {
  expect(validateGEO(input)).toBe(expected);
});
