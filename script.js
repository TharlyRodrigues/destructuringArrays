'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  hours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}  `
    );
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// Splint and join
console.log('a+very+nice+string'.split('+'));
console.log('jonas Schmedtman'.split(' '));

const [firstName, lastName] = 'jonas Schmedtman'.split(' ');

const newName = ['Mr', firstName, lastName.toLowerCase()].join(' ');
console.log(newName);
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+'));
console.log('Tharly'.padStart(25, '+').padEnd(30, '+'));

const markCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(markCreditCard(6554488487));
console.log(markCreditCard('6554488487'));
console.log(markCreditCard(655448848745877456555));

// repeat
const message2 = 'Bad Waether.... all Departues Delayed';
console.log(message2.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${'🛬'.repeat(n)}`);
};

planesInline(5);
planesInline(3);
planesInline(12);
/*

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing Emails
const email = 'hello@tharly.io';
const loginEmail = '  hello@tharly.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to barding door 23. Boarding door 23';
console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const place = 'Airbus A320neo';
console.log(place.includes('A320'));
console.log(place.includes('Boeing'));
console.log(place.startsWith('Air'));

if (place.startsWith('Airbus') && place.endsWith('neo')) {
  console.log('part of the New ARirbus family');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!'); 
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkWiddSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('you got the middle seat 🥲');
  else console.log('you got lucky 🎉');
};

checkWiddSeat('11B');
checkWiddSeat('23C');
checkWiddSeat('3E');

const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'correct 🏆'],
  [false, 'try again!'],
]);

console.log(question);

console.log(Object.entries(hours));

// convert objetos em to map
const hoursMap = new Map(Object.entries(hours));
console.log(hoursMap);

console.log(question.entries('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//convert map to array
console.log([...question]);
console.log(question.entries);
console.log([...question.keys()]);
console.log([...question.values()]);

/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisboa, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
const arr = [1, 2];
rest.set(arr, 'teste');
rest.set(document.querySelector('h1'), 'heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));


const ordersSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);

console.log(ordersSet);
console.log(new Set('jonas'));
console.log(ordersSet.size);
console.log(ordersSet.has('pizza'));
ordersSet.add('bombons');
console.log(ordersSet);
ordersSet.delete('risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//exemple
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];

const staffNew = [...new Set(staff)];
console.log(staffNew);
for (const staffSet of staffNew) console.log(staffSet);

console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
);


// property names

const properties = Object.keys(hours);
console.log(properties);

let operStart = `we are open ${properties.length} days: `;

for (const day of properties) {
  operStart += `${day}, `;
}

console.log(operStart);

// property Values
const values = Object.values(hours);
console.log(values);

// entire object
const entries = Object.entries(hours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at  ${close}`);
}


////////////////////////////////////////////////
// optional chaining

if (restaurant.hours && restaurant.hours.mon)
  console.log(restaurant.hours.mon.open);

console.log(restaurant.hours.mon?.open);

// exemple
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.hours[day]?.open ?? 'closed';
  console.log(`on ${day}, we open at ${open}`);
}

// methods
console.log(restaurant.order?.(0, 1) ?? 'method does not exist');

console.log(restaurant.orderRisotto?.(0, 1) ?? 'method does not exist');

const user = [{ name: 'tharly', email: 'tharly@gmail.com' }];

console.log(user[0]?.name ?? 'user array empty');




///////////////////////////////////////////////
// the for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);



// Logical Assignment Operators
const rest1 = {
  name: 'capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La pizza',
  owner: 'giovanni Rossi',
};

// Or assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// nullish assignment operator(null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

restaurant.nunGuests = 0;
const guests = restaurant.nunGuests || 10;
console.log(guests);

// nullish: null and undefined (NOT 0 or '')
const guestsCorrect = restaurant.nunGuests ?? 10;
console.log(guestsCorrect);

///////////////////////////////////////////
// short circuiting (&& and ||)
//use any data type, return any data type, short-circuiting

console.log('---------or-------');
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'hello' || 32 || null);

restaurant.nunGuests = 23;
const guests1 = restaurant.nunGuests ? restaurant.nunGuests : 10;
console.log(guests1);

const guests2 = restaurant.nunGuests || 10;
console.log(guests2);
console.log('---------and-------');
console.log(0 && 'jonas');
console.log(23 && 'jonas');
console.log('hello ' && 23 && null && 'jonas');

// practical exemple

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
/*

// 1.  Destructuring
//SPREAD, because on side of =

const arr = [1, 2, ...[2, 3]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. Function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 8);
add(1, 5, 13, 5, 9);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

////////////////////////////////////////////////////
// the spread operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newManu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newManu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

//Join 2 array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objetos

const str = 'jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);
// console.log('j', 'o');
// console.log(`${...str} Schmerdtmann`);

// real-world examples
const ingredients = [
  // prompt("let's make past! Ingredients 1? "),
  // prompt('Ingredients 2?'),
  // prompt('Ingredients 3?'),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {
  founderIn: 1998,
  ...restaurant,
  founder: 'Giuseppe',
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

///////////////////////////////////////
// Destructuring de Objects 
restaurant.orderDelivery({
  time: '23:30',
  address: 'via del sole,21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'vila de sole,21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);


const arr = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];

const [x, y, z] = arr; // tarefa de desestruturação
console.log(x, y, z);
console.log(arr);

const [first, , second] = restaurant.categories;
console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCouser] = restaurant.order(2, 0);
console.log(starter, mainCouser);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 5];
console.log(p, q, r);
*/
