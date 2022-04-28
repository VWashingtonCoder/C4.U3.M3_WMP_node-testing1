const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = {name: ' Ace', role: 'Vice-Captain ', crew: ' WhiteBeard Pirates '};
    const expected = {name: 'Ace', role: 'Vice-Captain', crew: 'WhiteBeard Pirates'};
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
    expect(input).not.toEqual(actual);
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = {name: ' Ace', role: 'Vice-Captain ', crew: ' WhiteBeard Pirates '};
    const expected = {name: 'Ace', role: 'Vice-Captain', crew: 'WhiteBeard Pirates'};
    const actual = utils.trimPropertiesMutation(input);

    expect(actual).toEqual(expected);
  })
  
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = {name: ' Ace', role: 'Vice-Captain ', crew: ' WhiteBeard Pirates '};
    const expected = {name: 'Ace', role: 'Vice-Captain', crew: 'WhiteBeard Pirates'};
    const actual = utils.trimPropertiesMutation(input);

    expect(actual).toEqual(expected);
    expect(input).toEqual(actual);
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const integers = [{ integer: 1 }, { integer: 8 }, { integer: 3 }, { integer: 5 }, { integer: 2 }];
    const actual = utils.findLargestInteger(integers);

    expect(actual).toBe(8)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.count).toBe(3);
    counter.countDown();
    expect(counter.count).toBe(3);
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    expect(counter.count).toBe(3);
    counter.countDown();
    expect(counter.count).toBe(3);
    counter.countDown();;
    expect(counter.count).toBe(2);
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    expect(counter.count).toBe(3);
    counter.countDown();;
    expect(counter.count).toBe(3);
    counter.countDown();
    expect(counter.count).toBe(2);
    counter.countDown();
    expect(counter.count).toBe(1);
    counter.countDown();
    expect(counter.count).toBe(0);
    counter.countDown();
    expect(counter.count).toBe(0);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.season).toEqual('spring')
    seasons.next()
    expect(seasons.season).toEqual('summer')
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    expect(seasons.season).toEqual('spring')
    seasons.next()
    seasons.next()
    expect(seasons.season).toEqual('fall')
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    expect(seasons.season).toEqual('spring')
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.season).toEqual('winter')
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    expect(seasons.season).toEqual('spring')
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.season).toEqual('spring')
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    expect(seasons.season).toEqual('spring')
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.season).toEqual('summer')
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    expect(seasons.season).toEqual('spring')
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.season).toEqual('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.odometer).toBe(0)
    focus.drive(20)
    expect(focus.odometer).toBe(20)
  })

  test('[16] driving the car uses gas', () => {
    expect(focus.tank).toBe(20)
    focus.drive(50)
    expect(focus.tank).toBe(18.333333333333332)
  })
  test('[17] refueling allows to keep driving', () => {
    expect(focus.tank).toBe(20)
    focus.drive(50)
    expect(focus.tank).toBe(18.333333333333332)
    focus.refuel(2)
    expect(focus.tank).toBe(20)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    expect(focus.tank).toBe(20)
    focus.drive(50)
    expect(focus.tank).toBe(18.333333333333332)
    focus.refuel(5)
    expect(focus.tank).toBe(20)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const actual = await utils.isEvenNumberAsync(2);
    expect(actual).toBe(true)

  })
  test('[20] resolves false if passed an odd number', async () => {
    const actual = await utils.isEvenNumberAsync(7);
    expect(actual).toBe(false)
  })
})
