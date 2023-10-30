// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 146.171 yen", function(){
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(1);
    const expectedYenAmount = 0.934 * 156.5 * 3.5;
    expect(fromDollarToYen(3.5)).toBe(511.5985);
})

test("500 yen should be 2.7753 pounds", function(){
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(500)
    const expectedPoundAmount = 0.00638 * 0.87 * 500
    expect(fromYenToPound(500)).toBe(2.7753);
})