
const apiEndpoint = `https://restcountries.com/v3.1/all`;
const countryTemplate= document.querySelector("[data-country-template]")
const randomInt = (max)=>{ return Math.floor(Math.random()*max)}
const countryCardsContainer= document.querySelector("[data-country-cards-container]")
const searchInput = document.querySelector('[data-search]')


let places=[];
searchInput.addEventListener("input", (e)=>{
    const value=e.target.value
    console.log(value)
places.forEach( country=>{

   let isVisible=country.name.includes(value)||country.officialName.includes(value)
   country.card.classList.toggle("hidden", isVisible);
}
)
 
   
    
})





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
  
     places= data.map(country => {
      
      
      
      
        const card= countryTemplate.content.cloneNode(true).children[0]
        const countryDetails ={
            countryName: card.querySelector("[data-country-header]"),
            countryFlag:card.querySelector("[data-country-flag]"),
            officialName:card.querySelector("[data-country-official-name]"),
            population:card.querySelector("[data-population]"),
            capitalCity:card.querySelector("[data-capital-city]"),
            currencyName:card.querySelector("[data-currency-name]"),
            currencySymbol:card.querySelector("[data-currency-symbol]"),
            continent: card.querySelector("[data-continent]")
        }
        
    
        countryDetails.countryName.textContent=country.name.common;
        countryDetails.countryFlag.src=country.flags.png;
        countryDetails.officialName.textContent=`Official Name: ${country.name.official}`;
        countryDetails.population.textContent=`population: ${country.population}`;
        countryDetails.capitalCity.textContent= `capital: ${country.capital}`;
        countryDetails.continent.textContent=`continent: ${country.continents}`;

      const currencyKey=Object.keys(null||country.currencies);
      currencyKey.map(key=>{
       countryDetails.currencyName.textContent=  `Currency Name: ${country.currencies[key].name}`
       countryDetails.currencySymbol.textContent=   `Currency Symbol: ${country.currencies[key].symbol}`
   
      })
        countryCardsContainer.append(card)
        const countryFilters={
            name:countryDetails.countryName.textContent,
            officialName:countryDetails.officialName.textContent,
            capital:countryDetails.capitalCity.textContent,
            continent:countryDetails.continent.textContent
        }
        places.push(countryFilters);

    });
})
.catch(err=>console.log(err));
};

loadCountries();