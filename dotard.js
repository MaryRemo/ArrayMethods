const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

// businesses.forEach(business => {
    
//     let someVariableThatMeansZipCode = "addressZipCode"
//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section> 
   
//     ${business.addressCity},
//     ${business['addressStateCode']},
//     ${business[someVariableThatMeansZipCode]}
//     </section
//   `
//   outEl.innerHTML += "<hr/>"
// });

// Array to contain all the New York businesses
// const newYorkBusinesses = businesses.filter(business => {
//     let inNewYork = false;
  
//     if (business.addressStateCode === "NY") {
//         inNewYork = true
//     }
  
//     return inNewYork
//   });

  const newYorkBusinesses = businesses.filter(business => business.addressStateCode === "NY");

  console.log('NY businesses', newYorkBusinesses);

  const manufacturingBusinesses = businesses.filter(business => business.companyIndustry === "Manufacturing");



  outEl.innerHTML = "<h1>New York Businesses</h1>"
  
  manufacturingBusinesses.forEach(business => {
    
    let someVariableThatMeansZipCode = "addressZipCode";

  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
    <section> 
   
    ${business.addressCity},
    ${business['addressStateCode']},
    ${business[someVariableThatMeansZipCode]}
    </section
  `
  outEl.innerHTML += "<hr/>"
});
