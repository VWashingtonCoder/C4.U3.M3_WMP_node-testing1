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
    this.initialTank = tankSize
    this.mpg = mpg;
    
    // ✨ initialize whatever other properties are needed
  }

  drive(distance) {
    // ✨ implement
    const totalMiles = this.tank * this.mpg;
    const remainingMiles = totalMiles - distance;
    const fuelRemaining = remainingMiles/this.mpg;
    
    if(distance > totalMiles){
      this.odometer += distance + remainingMiles;
      this.tank = 0;
      return `${this.odometer} (ran out of gas after ${distance + remainingMiles} miles)`;
    } else {
      this.odometer += distance;
      this.tank = fuelRemaining;
      return this.odometer
    }
  }

  refuel(gallons) {
    // ✨ implement
    if(this.tank + gallons <= this.initialTank){
      this.tank += gallons;
      return this.odometer;
    } else if(this.tank + gallons > this.initialTank ){
      const overflowGallons  = (this.tank + gallons) - this.initialTank
      this.tank += gallons - overflowGallons
      return `${this.odometer} (tank only holds ${this.initialTank} gallons)`
    }
  }
}


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
  
  return new Promise(resolve => {
    if(number % 2 === 0){
      resolve(true);
    } else {
      resolve(false)
    }
  })
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
