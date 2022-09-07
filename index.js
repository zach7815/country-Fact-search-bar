
const apiEndpoint = `https://restcountries.com/v3.1/all`;
const randomCountryBtn = document.querySelector('#random');
const cardContainer = document.querySelector(".container");
const searchInput = document.querySelector('[data-search]');

let places=[];

const filterCountry= (countrysArray, targetCountry)=>{
    countrysArray.forEach((country,index)=>{
      let card= document.querySelectorAll(".card")
    
      country["element"]=card[index]
        let isVisible=country.commonName.toLowerCase().includes(targetCountry)||country.officialName.toLowerCase().includes(targetCountry)
        country.element.classList.toggle("hidden", !isVisible);
     }
    )};

const clearInput= ()=>{
    searchInput.input="";
}
 const randomInt = (max)=>{ return Math.floor(Math.random()*max)};

searchInput.addEventListener("input", (e)=>{
    const userInput =e.target.value.toLowerCase()
   
    filterCountry(places,userInput);
});

randomCountryBtn.addEventListener("click", ()=>{
   let randNumber=randomInt(250);
   let randomCountry=places[randNumber].commonName.toLowerCase();
   filterCountry(places,randomCountry); 
})

let randomCountry=randomInt();
const loadCountries= async()=>{
     await fetch(apiEndpoint, 
    {
        method:"GET",
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
    })
    .then(response=>{ 
       return  response.json()
       
    })
    .then(data=>{
       const countries=data;
       let result = ""
      countries.map((country)=>{
        const {name, flags, population, capital, continents}=country;

           let currencyKey=""
           let currency =""
            let currencySymbol=""

          
            if(country.currencies){
                currencyKey=Object.keys(country.currencies)
                currencyKey.map(key=>{
                   currency=   country.currencies[key].name;
                   currencySymbol=country.currencies[key].symbol;
                       })
            }
            else{
                currencyKey="no currency"
            }
       
       let card= `<div class="card ${name.official}" >
            <h2>${name.common}</h2>
            <img src="${flags.png}" alt="a flag for the country of ${name.common}">
            <h3>${name.official}</h3>
            <h4> Continent</h4>
            <p>${continents}</p>
            <h4> Country Population</h4>
            <p>${population.toLocaleString("en-US")}</p>
            <h4> Capital City</h4>
            <p>${capital===undefined?"no capital":capital}</p>
            <h4> Currency</h4>
            <p>${currency}</p>
            <h4> Currency Symbol</h4>
            <p>${currencySymbol}</p>
        </div>`
     
result+=card;

     cardContainer.innerHTML=result;
    const filterObject= {
        commonName:name.common,
        officialName:name.official,
        element:result,

    }
     places.push(filterObject)
       
       })
      
    }).catch((error)=>{
       console.log(error);
    });
};
clearInput()
loadCountries();

