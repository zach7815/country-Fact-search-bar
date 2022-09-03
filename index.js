
const apiEndpoint = `https://restcountries.com/v3.1/all`;
const countryTemplate= document.querySelector("[data-country-template]");
const countryCardsContainer= document.querySelector("[data-country-cards-container]");
const searchInput = document.querySelector('[data-search]');
const randomCountryBtn = document.querySelector('#random');

let places=[];

const filterCountry= (countrysArray, targetCountry)=>{
    countrysArray.forEach(country=>{
        let isVisible=country.name.toLowerCase().includes(targetCountry)||country.officialName.toLowerCase().includes(targetCountry)
        country.element.classList.toggle("hidden", !isVisible);
     }
    )};

 const randomInt = (max)=>{ return Math.floor(Math.random()*max)};

searchInput.addEventListener("input", (e)=>{
    const userInput =e.target.value.toLowerCase()
    filterCountry(places,userInput);
});



randomCountryBtn.addEventListener("click", ()=>{
   let randNumber=randomInt(180);
   let randomCountry=places[randNumber].name.toLowerCase();
   console.log(randomCountry);
   filterCountry(places,randomCountry);
   
    
})
let randomCountry=randomInt();


const loadCountries= async()=>{
    const response = await fetch(apiEndpoint, 
    {
        method:"GET",
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
    })

    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    data.map(country => {
                const card= countryTemplate.content.cloneNode(true).children[0]
                console.log(country)
                const {name, officialName, flag, population, capital, currencyName,currencySymbol}=country;
                console.log(name.common);

                const cardTemplate =`
                <div class="card">
                <h3 class="commonName">${name.common}</h3>
                <img src="${flag}"  alt="">
                <h4 class="officialName">${officialName} </h4>
                <p>${population} </p>
                <p>${capital} </p>
                <p>${currencyName}</p>
                <p>${currencySymbol} </p>
            </div>
                `

            
  
        
            //   const currencyKey=Object.keys(null||country.currencies);
            //   currencyKey.map(key=>{
            //    countryDetails.currencyName.textContent=  `Currency Name: ${country.currencies[key].name}`
            //    countryDetails.currencySymbol.textContent=   `Currency Symbol: ${country.currencies[key].symbol}`
           
            //   })
            //     countryCardsContainer.append(card)
            //     const countryFilters={
            //         name:countryDetails.countryName.textContent,
            //         officialName:countryDetails.officialName.textContent,
            //         capital:countryDetails.capitalCity.textContent,
            //         continent:countryDetails.continent.textContent,
            //         element:card,
            //     }
            //     places.push(countryFilters)
            });
};

loadCountries();

