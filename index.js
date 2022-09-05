
const apiEndpoint = `https://restcountries.com/v3.1/all`;
const randomCountryBtn = document.querySelector('#random');

let places=[];

const filterCountry= (countrysArray, targetCountry)=>{
    countrysArray.forEach(country=>{
        let isVisible=country.name.toLowerCase().includes(targetCountry)||country.officialName.toLowerCase().includes(targetCountry)
        country.element.classList.toggle("hidden", !isVisible);
     }
    )};

 const randomInt = (max)=>{ return Math.floor(Math.random()*max)};

// searchInput.addEventListener("input", (e)=>{
//     const userInput =e.target.value.toLowerCase()
//     filterCountry(places,userInput);
// });



randomCountryBtn.addEventListener("click", ()=>{
   let randNumber=randomInt(250);
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
    .then(response=>{const data=response.json()})
    .then((data)=>console.log(data))
    




};

loadCountries();


    // if(!response.ok){
    //     throw new Error(`HTTP error! status: ${response.status}`)
    // }

    // const data = await response.json()
    // data.map(country => {
    //             const card= countryTemplate.content.cloneNode(true).children[0]
    //             const propList= ["name", "flags", "population", "capital", "currencies"];
    //             const hasProps=[];
    //             const hasProperties =(object, propList)=>{
    //                 return propList.forEach(prop=>{
    //                     return object.hasOwnProperty(prop)?hasProps.push(prop):hasProps.push(null);
    //                 })
    //             }
    //            hasProperties(country,propList);
    //            const existingProps=hasProps.filter(prop=>prop!==null);

    //            const countryProps = {
    //             name:"",
    //             flags:"",
    //             population: "",
    //             capital:"",
    //             currencies:""
    //            }
                
    //            existingProps.forEach(propName=> countryProps.push(country[propName]));
         

            //     const {name, officialName, flags, population, capital, currencies}=country;
        

            //     let currencyKey=Object.keys(currencies);
               

                
            // const renderCard=(countryName, officialName, flagSrc,population,capital,currencyName, currencySymbol)=>{
            //     const cardTemplate =`
            //     <div class="card">
            //     <h3 class="commonName">${countryName}</h3>
            //     <img src="${flagSrc}"  alt="">
            //     <h4 class="officialName">${officialName} </h4>
            //     <p>${population} </p>
            //     <p>${capital} </p>
            //     <p>${currencyName} </p>
                
            // </div>
            //     `
            //     return cardTemplate
            // }
              

     
            // });