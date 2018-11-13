#!/usr/bin/env node

import askPlayerName from '../';

console.log('Welcome to the Brain Games!');
const playerName = askPlayerName();
console.log(`Hello, ${playerName}!`);
