// Test Data


// [Exercise 1]_trimProperties
function trimProperties(obj) {
  let newObj = {...obj}
  Object.keys(newObj).forEach(key => {
    newObj[key] = newObj[key].trim();
  })

  return newObj
}

// [Exercise 2]_trimPropertiesMutation
function trimPropertiesMutation(obj) {
  Object.keys(obj).forEach(key => {
    obj[key] = obj[key].trim();
  })

  return obj;
}

// [Exercise 3]_findLargestInteger
function findLargestInteger(integers) {
  let numArr = [];
  
  for(let i = 0; i < integers.length; i++){
    numArr.push(integers[i].integer)  
  }
  
  let largest = Math.max(...numArr)

  return largest
}


class Counter {
  
  constructor(initialNumber) {
    this.count = initialNumber
    this.turns = 0;
  }

  countDown() {
    if(this.turns === 0 || this.count === 0) {
      this.turns += 1;
    } else if(this.turns !== 0) {
      this.count -= 1;
      this.turns += 1;
    }
  }
}

class Seasons {
  
  constructor() {
    this.season = 'spring'
    this.seasonNum = 1
  }

  next() {
    if(this.seasonNum === 1){
      this.seasonNum += 1;
      this.season = 'summer';
    }else if(this.seasonNum === 2){
      this.seasonNum += 1;
      this.season = 'fall';
    }else if(this.seasonNum === 3){
      this.seasonNum += 1;
      this.season = 'winter';
    }else if(this.seasonNum === 4){
      this.seasonNum = 1;
      this.season = 'spring';
    }     
  }
}

class Car {
  constructor(name, tankSize, mpg) {
    this.name = name;
    this.odometer = 0; // car initilizes with zero miles
    this.tank = tankSize; // car initiazes full of gas
    this.mpg = mpg;
    // ✨ initialize whatever other properties are needed
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(100) // returns 100
   * focus.drive(100) // returns 200
   * focus.drive(100) // returns 300
   * focus.drive(200) // returns 500
   * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
   */
  drive(distance) {
    // ✨ implement
  }

  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  refuel(gallons) {
    // ✨ implement
  }
}

let focus = new Car('focus', 20, 30)
console.log(focus)

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 */
function isEvenNumberAsync(number) {
  // ✨ implement
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
