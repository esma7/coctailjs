const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

let listItems = document.querySelector(".listItems");
let searchCok = document.querySelector(".search");


const changeMode = document.querySelector("#changeMode");
const body = document.querySelector("body");



changeMode.addEventListener("click", ()=>{
        body.classList.toggle("darkMode");
})


const getCoctail = async() =>{
    const data = await(await fetch(url)).json()
    displayCoctail(data.drinks)
    searchCoctail(data.drinks)
    console.log(data)
    
}

getCoctail();

const displayCoctail = (data) =>{
    let coctail = "";
    data.forEach((item) =>{
        coctail += `
        <div class="coctail-item">
                    <img src="${item.strDrinkThumb}" alt="">
                    <h1>${item.strDrink}</h1>
                    <span>${item.strGlass}</span>
                    <p>${item.strAlcoholic}</p>                   
        </div>
        `
    })

    listItems.innerHTML = coctail;
}

const searchCoctail = (data) =>{
    searchCok.addEventListener("input", (e)=>{
        let value = e.target.value.trim();
        const filtered = data.filter((item) =>{
            return item.strDrink.toUpperCase().includes(value.toUpperCase())
        })

        displayCoctail(filtered);
        // console.log(value);
    })
}




















// const getCoctail = async() =>{
//     const data = await(await fetch(url)).json();
//     displayCoctail(data.drinks)
//     searchCoctail(data.drinks);
//     console.log(data);
// }
// getCoctail()

// const displayCoctail = (data) =>{
//     let coctails = "";
//     data.forEach((item) =>{
//         coctails += `
//         <li>
//         <div class="img">
//             <img src="${item.strDrinkThumb
//             }" alt="">
//         </div>
//         <div class="desc">
//             <h3>${item.strDrink}</h3>
//             <div class="info">
//                 <span class="bold">Information</span>
//                 <span>${item.strGlass
//                 }</span>
//             </div>
//             <div class="info">
//                 <span class="bold">Type</span>
//                 <span>${item.strAlcoholic}</span>
//             </div>                        
//         </div>
//     </li>
//         `
//     })
    
//     listItems.innerHTML = coctails;

// }


// const searchCoctail = (data) =>{
//     searchCok.addEventListener("input", (e)=>{
//         let value = e.target.value.trim();
//         const filtered = data.filter((coctail)=>{
//            return coctail.strDrink.toUpperCase().includes(value.toUpperCase())
//         })
//         displayCoctail(filtered)
//         // console.log(filtered);
//     })  
// }

