/* <div class="pro-card">
<div class="pro-img" style="background-image: url(https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3.jpg);"></div>
<div class="pro-name">Dnk yellow shoes</div>
<div class="pro-cat">Men</div>
<div class="pro-price">$150.00</div>
</div> */


let proArray = [
    {
        proimg:"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg",
        proname:"DNK Yellow Shoes",
        procat:"Men",
        proprice:"$120.00",
    },
    {
        proimg:"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe1-300x300.jpg",
        proname:"DNK Blue Shoes",
        procat:"Men",
        proprice:"$200.00",
    },
    {
        proimg:"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg",
        proname:"DNK Yellow Shoes",
        procat:"Men",
        proprice:"120",
    },
    {
        proimg:"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg",
        proname:"DNK Yellow Shoes",
        procat:"Men",
        proprice:"120",
    },
    {
        proimg:"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg",
        proname:"DNK Yellow Shoes",
        procat:"Men",
        proprice:"120",
    },
    {
        proimg:"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg",
        proname:"DNK Yellow Shoes",
        procat:"Men",
        proprice:"120",
    },
    {
        proimg:"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg",
        proname:"DNK Yellow Shoes",
        procat:"Men",
        proprice:"120",
    },
    {
        proimg:"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg",
        proname:"DNK Yellow Shoes",
        procat:"Men",
        proprice:"120",
    },
    {
        proimg:"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg",
        proname:"DNK Yellow Shoes",
        procat:"Men",
        proprice:"120",
    },
    {
        proimg:"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg",
        proname:"DNK Yellow Shoes",
        procat:"Men",
        proprice:"120",
    },
];

proArray.map((items,index)=>{

    // make elements
    let cardcontainer = document.querySelector(".pro-cards-section")
    let proCard = document.createElement("div");
    let proImg = document.createElement("div");
    let proName = document.createElement("div");
    let proCat = document.createElement("div");
    let proPrice = document.createElement("div");
    let icon = document.createElement("i");

    // add classes
    proCard.classList.add("pro-card");
    proImg.classList.add("pro-img");
    proName.classList.add("pro-name");
    proCat.classList.add("pro-cat");
    proPrice.classList.add("pro-price");
    icon.classList.add("icon2","fas","fa-shopping-cart")
     
    //assigning text
    proImg.style.backgroundImage = `url('${items.proimg}')`;
    proName.innerText = items.proname
    proCat.innerText = items.procat
    proPrice.innerText = items.proprice
    
    //append elements
    cardcontainer.appendChild(proCard)
    proCard.appendChild(proImg)
    proImg.appendChild(icon)
    proCard.appendChild(proName)
    proCard.appendChild(proCat)
    proCard.appendChild(proPrice)

function addtocart(proimg,proprice){

    console.log(proimg)
    console.log(proprice)

}
    
    
    let add = document.querySelectorAll(".icon2");
add[index].addEventListener("click",()=> addtocart(items.proimg,items.proprice))
})

// addto cart fun

let addToCartBtn = document.querySelector(".addtocart");
let addToCartCloseBtn = document.querySelector(".cart-txt-2");
let cart = document.querySelector(".cart");

addToCartBtn.addEventListener("click",()=>{
    cart.style.display= "block"
})

addToCartCloseBtn.addEventListener("click",()=>{
    cart.style.display= "none"
})
