// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('valid phone number with dashes', () => {
  expect(isPhoneNumber('562-449-6030')).toBe(true);
});

test('valid phone number with parentheses', () => {
  expect(isPhoneNumber('(562) 449-6030')).toBe(true);
});

test('phone number with letters', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

test('phone number too short', () => {
  expect(isPhoneNumber('(562) 449')).toBe(false);
});

// isEmail tests
test('valid email', () => {
  expect(isEmail('test@ucsd.edu')).toBe(true);
});

test('valid email with numbers', () => {
  expect(isEmail('username123@ucsd.edu')).toBe(true);
});

test('invalid email no @ symbol', () => {
  expect(isEmail('testatucsd.edu')).toBe(false);
});

test('invalid email bad domain', () => {
  expect(isEmail('test@.edu')).toBe(false);
});

// isStrongPassword tests
test('valid password', () => {
  expect(isStrongPassword('GIGACHADHAS1')).toBe(true);
});

test('valid password with underscore', () => {
  expect(isStrongPassword('GIGA_CHADHAS1')).toBe(true);
});

test('invlaid password, special character not allowed', () => {
  expect(isStrongPassword('$$$$$$$$$$$$$')).toBe(false);
});

test('invalid password starting with number', () => {
  expect(isStrongPassword('1abcde')).toBe(false);
});

// isDate tests
test('valid date XX being single digit', () => {
  expect(isDate('9/1/2024')).toBe(true);
});

test('valid date XX being double digit', () => {
  expect(isDate('09/01/2004')).toBe(true);
});

test('invalid date year too short', () => {
  expect(isDate('09/01/04')).toBe(false);
});

test('month has letters instead of numbers (if youre not from the US then Sep isnt a day either :p )', () => {
  expect(isDate('Sep/01/2004')).toBe(false);
});

// isHexColor tests
test('valid 3 character hex color', () => {
  expect(isHexColor('#111')).toBe(true);
});

test('valid 6 character hex color', () => {
  expect(isHexColor('#111111')).toBe(true);
});

test('invalid hex color, too many characters', () => {
  expect(isHexColor('#1111111')).toBe(false);
});

test('invalid hex color with invalid letters', () => {
  expect(isHexColor('#ZZZZZZ')).toBe(false);
});