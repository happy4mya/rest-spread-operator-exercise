/*function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
*/

const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)


//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument. Make sure to do this using the rest and spread operator.

const findMin = (...args) => Math.min(...args)

findMin(1, 4, 12, -3) // -3
findMin(1, -1) // -1
findMin(3, 1) // 1


// ​Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 })

mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }) // {a:1, b:2, c:3, d:4}

// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturn = (arr, ...args) => ({ ...arr, ...args.map(v => v * 2) })

doubleAndReturnArgs([1, 2, 3], 4, 4) // [1,2,3,8,8]
doubleAndReturnArgs([2], 10, 4) // [2, 20, 8]

// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions! Make sure that you are always returning a new array or object and not modifying the existing inputs.

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;

}

const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
}

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}

const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}
