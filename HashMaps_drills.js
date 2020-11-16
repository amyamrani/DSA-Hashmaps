const HashMap = require('./HashMap');
const HashMapSC = require('./HashMapSC');

// 1. Create a HashMap class
// Export your HashMap module
// Create a .js file called HashMaps_drills. In the file import the HashMap module.
// Create a function called main()
// Inside your main() function, create a hash map called lotr.
// For your hash map that you have created, set the MAX_LOAD_RATIO = 0.5 and SIZE_RATIO = 3.
// Add the following items to your hash map: {"Hobbit": "Bilbo"}, {"Hobbit": "Frodo"},
// {"Wizard": "Gandalf"}, {"Human": "Aragorn"}, {"Elf": "Legolas"}, {"Maiar": "The Necromancer"},
// {"Maiar": "Sauron"}, {"RingBearer": "Gollum"}, {"LadyOfLight": "Galadriel"}, {"HalfElven": "Arwen"},
// {"Ent": "Treebeard"}

function main() {
  const lotr = new HashMap();
  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;

  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandalf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");

  console.log('Maiar key:', lotr.get('Maiar'));
  console.log('Hobbit key:', lotr.get('Hobbit'));

  return lotr;
}

console.log(main());

// Print your hash map and notice the length and items that are hashed in your hash map.
// Have you hashed all the items you were asked to?

  // No, 11 items were provided and the length is 9

  // Undefined item:
  //  - {"Ent": "Treebeard"}

  // Items missing:
  //  - {"Hobbit": "Bilbo"}
  //  - {"Maiar": "The Necromancer"}

// Retrieve the value that is hashed in the key "Maiar" and Hobbit.

  // console.log(lotr.get('Maiar'));
  // ===> Sauron

  // console.log(lotr.get('Hobbit'));
  // ===> Frodo

// What are the values of Maiar and Hobbit that you have?
  // Maiar key: Sauron
  // Hobbit key: Frodo

// Is there a discrepancy? Explain your answer.
  // Yes, duplicate values for the same key were given so, if a key already exists the last
  // value will be stored

// What is the capacity of your hash table after you have hashed all the above items?
// Explain your answer.

  // _capacity: 8
  // Once for each time we call set.


// 2. WhatDoesThisDo

const WhatDoesThisDo = function(){
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1,10);    // "Hello World": 10
  map1.set(str2,20);    // "Hello World": 20
  let map2 = new HashMap();
  let str3 = str1;    // "Hello World"
  let str4 = str2;    // "Hello World"
  map2.set(str3,20);
  map2.set(str4,10);

  console.log(map1.get(str1));    // 20
  console.log(map2.get(str3));    // 10
}

WhatDoesThisDo();

// What is the output of the following code? explain your answer.
  // In map 1 and map 2, both strings are "Hello World".
  // "Hello World" is given a value on the first set, and then collides in the second set and shifts
  // it over.


// 3. Demonstrate understanding of Hash maps
// *You don't need to write code for the following two drills. use any drawing app or simple pen and paper *

  // 1) Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of
  // length 11 using open addressing and a hash function k mod m, where k is the key and m is the length.

  // 10%11 = 10
  // 22%11 = 0
  // 31%11 = 9
  // 4%11 = 4
  // 15%11 = 4
  // 28%11 = 6
  // 17%11 = 6
  // 88%11 = 8
  // 59%11 = 4

  // [0]   [1]   [2]   [3]   [4]   [5]   [6]   [7]   [8]   [9]   [10]
  // 22     59                4     15    28    17    88    31    10

  console.table( [[22],[59],[],[],[4],[15],[28],[17],[88],[31],[10]] )

  // 2) Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map
  // with collisions resolved by separate chaining. Let the hash table have a length m = 9, and let the hash
  // function be k mod m.

  // 5%9 = 5
  // 28%9 = 1
  // 19%9 = 1
  // 15%9 = 6
  // 20%9 = 2
  // 33%9 = 6
  // 12%9 = 3
  // 17%9 = 8
  // 10%9 = 1

  // [0]   [1]   [2]   [3]   [4]   [5]   [6]   [7]   [8]
  //        28    20    12          5     15          17
  //        19                            33
  //        10

  console.table( [[], [28, 19, 10], [20], [12], [], [5], [15, 33], [], [17]] )


// 4. Remove duplicates
// Implement a function to delete all duplicated characters in a string and keep only the first
// occurrence of each character. For example, if the input is string “google”, the result after
// deletion is “gole”. Test your program with a sentence as well such as "google all that you think
// can think of".

function duplicate(str) {
  const map = new HashMap();
  let newStr = '';

  for (let i=0; i < str.length; i++) {
      map.set(str[i], str[i]);
      if (!newStr.includes(map.get(str[i]))) {
          newStr += map.get(str[i]);
      }
  }
  return newStr;
}

str = 'google all that you think can think of';
console.log(duplicate(str));      // gole athyuinkcf


// 5. Any permutation a palindrome
// Write an algorithm to check whether any anagram of some string is a palindrome. Given some string,
// "acecarr", the algorithm should return true, because the letters in "acecarr" can be rearranged to
// the anagram "racecar", which itself is a palindrome. In contrast, given the word "north", the algorithm
// should return false, because there's no anagram for "north" that would be a palindrome.

function palindrome(string) {
  const map = new Map();
  let odd = 0;

  for (let i = 0; i < string.length; i++) {
    if (map.get(string[i]) === undefined) {
      map.set(string[i], 1);
    }
    else {
      let char = map.get(string[i]);
      map.set(string[i], char += 1);
    }
  }

  for (let i = 0; i < map.size; i++) {
    if (map.get(string[i]) % 2 !== 0) {
      odd++;
      console.log('odd', odd);
    }
    if (odd > 1) {
      return false;
    }
  }
  return true;
};

str1 = 'acecarr';
str2 = 'north';
console.log(palindrome(str1));    // true
console.log(palindrome(str2));    // false


// 6. Anagram grouping
// Write an algorithm to group a list of words into anagrams.
// For example:

// input: ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']
// output: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]

function groupAnagrams(arr) {
  const anagramMap = new Map();
  arr.forEach((word) => {
    let sorted = alphabetize(word);
    if (anagramMap.has(sorted)) {
      anagramMap.get(sorted).push(word);
    }
    else {
      anagramMap.set(sorted, [word]);
    }
  });
  return [...anagramMap.values()];
};

function alphabetize(word) {
  let alphebtized = word.split('').sort().join('');
  return alphebtized;
};

arr = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];
console.log(groupAnagrams(arr));    // [ ['east', 'eats', 'teas'], ['race', 'acre'], ['cars', 'arcs'] ]


// 7. Separate Chaining
// Write another hash map implementation as above, but use separate chaining as the collision resolution
// mechanism.

// Test your hash map with the same values from the lotr hash map.

  // See HashMapSC.js

  function mainSC() {
    const lotr = new HashMapSC();
    lotr.MAX_LOAD_RATIO = 0.5;
    lotr.SIZE_RATIO = 3;

    lotr.set("Hobbit", "Bilbo");
    lotr.set("Hobbit", "Frodo");
    lotr.set("Wizard", "Gandalf");
    lotr.set("Human", "Aragorn");
    lotr.set("Elf", "Legolas");
    lotr.set("Maiar", "The Necromancer");
    lotr.set("Maiar", "Sauron");
    lotr.set("RingBearer", "Gollum");
    lotr.set("LadyOfLight", "Galadriel");
    lotr.set("HalfElven", "Arwen");
    lotr.set("Ent", "Treebeard");

    console.log(lotr._hashTable);

    return lotr;
  }

  mainSC();