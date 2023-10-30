// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}



const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 0.934 * 156.5
    return valueInYen 
}

const fromYenToPound = function(valueInYen){
    let valueInPound =  valueInYen * 0.00638 * 0.87
    return valueInPound
}

const sum = (a,b) => {
    return a + b
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };