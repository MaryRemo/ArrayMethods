// businesses.forEach(business => {
//     /* CALCULATE ORDER SUMMARY */
//     // let totalOrders = 0
//     // business.orders.forEach(order => totalOrders += order)

//     // CALCULATE ORDER SUMMARY */
//     let totalOrders = business.orders.reduce(
//         (currentTotal, nextValue) => currentTotal += nextValue,
//         0
//     )


//     outEl.innerHTML += `
//         <h2>
//             ${business.companyName}
//             ($${totalOrders.toFixed(2)})
//         </h2>
//         <section>
//             ${business.addressFullStreet}
//         </section>
//         <section>
//             ${business.addressCity},
//             ${business.addressStateCode}
//             ${business.addressZipCode}
//         </section>
//     `;
//     outEl.innerHTML += "<hr/>";
// });

const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

const totalRainfall = monthlyRainfall.reduce((currentTotal, upcoming) => {
    return currentTotal += upcoming;
})

console.log(totalRainfall)




const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentence = words.reduce((currentWord, nextWord) =>
    currentWord += nextWord += " "
    ," "
)

console.log(sentence)

// After several minutes of this, she abruptly stops and turns her head quickly in your direction, 
// eyes wide. "You know, my regional manager, Barry has been asking me for something for 
// months now. He wants me to produce a report for him that list only the companies that 
// have placed an order for more than nine thousand dollars."


// THIS IS THE BIG SPENDERS PRACTICE EXERCISE
// Array to contain all the BIG SPENDERS
const bigSpenders = businesses.filter(business => {
    let moreThan = false

    if (business.orders >= 9000) {
        moreThan = true
    }
    return moreThan
})