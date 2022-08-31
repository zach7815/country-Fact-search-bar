
const apiEndpoint = `https://restcountries.com/v3.1/all`;
const countryTemplate= document.querySelector("[data-country-template]")
const randomInt = (max)=>{ return Math.floor(Math.random()*max)}
const countryCardsContainer= document.querySelector("[data-country-cards-container]")




const loadCountries= async()=>{ await fetch(apiEndpoint, 
    {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
    })
.then(response=>{
    if(!response.ok){
        throw response.status
    }

   return response.json()
})
.then(data=>{
    data.map(country => {
      
      
      
      
        const card= countryTemplate.content.cloneNode(true).children[0]
        const countryDetails ={
            countryName: card.querySelector("[data-country-header]"),
            countryFlag:card.querySelector("[data-country-flag]"),
            officialName:card.querySelector("[data-country-official-name]"),
            population:card.querySelector("[data-population]"),
            capitalCity:card.querySelector("[data-capital-city]"),
            currencyName:card.querySelector("[data-currency-name]"),
            currencySymbol:card.querySelector("[data-curreny-symbol]"),
            continent: card.querySelector("[data-continent]")
        }
        
    

        countryDetails.countryName.textContent=country.name.common;
        countryDetails.countryFlag.src=country.flags.png;
        countryDetails.officialName.textContent=`Official Name: ${country.name.official}`;
        countryDetails.population.textContent=`population: ${country.population}`;
        countryDetails.capitalCity.textContent= `capital: ${country.capital}`
        countryDetails.currencyName.textContent=`currency: ${country.currencies.EUR||{}.name}`
        countryDetails.continent.textContent=`continent: ${country.continents}`
        

        countryCardsContainer.append(card)

    });
})
.catch(err=>console.log(err));
};

loadCountries();