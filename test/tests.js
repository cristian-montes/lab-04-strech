// IMPORT MODULES under test here:
import { isEven, } from '../is-even.js';

const test = QUnit.test;

// ISEVEN TEST
test('get an even number', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = isEven(2) // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
