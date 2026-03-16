let products=[
    header={link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvIlFrBEo5DE1QWHNrkshm0lQNcNUroWaetQ&s",logoname:"Roast & Co.",description:"Specialty Coffee Roasters",ule1:"Menu",ule2:"Our Story",ule3:"Process",ule4:"Locations",ule5:"Shop",link2:"https://cdn-icons-png.flaticon.com/512/691/691132.png",link3:"https://static.wixstatic.com/media/11062b_a5be48d3f8ca441195168dc03a527a7b~mv2.jpg/v1/fill/w_824,h_824,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Three%20Beverages.jpg"},
    first={productname:"Salted Caramel Latte",link:"https://cdn.prod.website-files.com/6595bdc93391268f77b2a568/693b58fd48fa909bc566fe20_STR_Evergreen_SaltedCaramelBiancoLatte_HeroFood_LowRes-p-500.jpg",price:"8 AZN"},
    second={productname:"Capuchino",link:"https://barashka28.ru/assets/images/product/alernative/kofe.jpg",price:"7 AZN"},
    third={productname:"Raf",link:"https://static-sl.insales.ru/files/1/2885/17050437/original/raf-coffee-recipe-2.jpg?1625037532",price:"9 AZN"},
    fourth={productname:"Espresso",link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9PRnzPVTMn_L_JCYVEEVb6NjkrBYgnuDcA&s",price:"5 AZN"},
]
let navigation=document.querySelector(".head")
let image=document.querySelector("img")
image.src=products[0].link
image.style.borderRadius="100%"
image.style.width="60px"
image.style.height="60px"
navigation.appendChild(image)
let textdiv=document.createElement("div")
navigation.appendChild(textdiv)
textdiv.style.padding="10px"
let p1=document.querySelector(".p1")
p1.innerHTML=products[0].logoname
p1.style.color="white"
p1.style.fontSize="20px"
p1.style.fontWeight="600"
navigation.appendChild(p1)
textdiv.appendChild(p1)
let p2=document.querySelector(".p2")
p2.innerHTML=products[0].description
p2.style.color="grey"
p2.style.fontSize="13px"

navigation.appendChild(p2)
textdiv.appendChild(p2)
textdiv.style.display="block"
let ul=document.querySelector("ul")
ul.style.listStyleType="none"
let nav=[products[0].ule1,products[0].ule2,products[0].ule3,products[0].ule4,products[0].ule5]
for(let i=0;i<5;i++){
    let li=document.createElement("li")
    li.innerHTML=nav[i]
    ul.appendChild(li);
}
navigation.appendChild(ul)
let img=document.createElement("img")
img.src=products[0].link2
img.style.width="30px"
img.style.height="30px"
img.style.margin="10px 20px 0px 210px"
navigation.appendChild(img)
let order=document.querySelector(".order")
navigation.appendChild(order)
order.style.color="white"
order.style.width="150px"
order.style.height="40px"
order.style.marginTop="5px"
order.style.fontSize="12px"
order.style.fontWeight="600"
order.style.display="flex"
order.style.alignItems="center"
order.style.justifyContent="center"
order.style.backgroundColor="rgb(104, 75, 47)"
let orderdiv=document.querySelector(".orderdiv")
orderdiv.style.display = "flex";
orderdiv.style.alignItems = "center";
hehediv=document.querySelector(".header")



for(let i=1;i<5;i++){
    // let coffee=document.createElement("img")
    // let coffeep=document.createElement("p")
    //  let coffeepr=document.createElement("p")
    // coffee.src=products[i].link
    // coffeep.innerHTML=products[i].productname
    // coffeepr.innerHTML=products[i].price
    // hehediv.appendChild(coffee)
    // hehediv.appendChild(coffeep)
    // hehediv.appendChild(coffeepr)
    // hehe.appendChild(coffee)
    // hehe.appendChild(coffeep)
    // hehe.appendChild(coffeepr)
    hehe=document.querySelector(".hehe")
    hehe.innerHTML+=`
        <div class="flex-col mt-5">
                 <div class="imgp">
                    <img src="${products[i].link}" alt="" class="image mb-4">
                 </div>
          <div class="imgtext text-center">
            <p class="mb-4 play">${products[i].productname}</p>
            <p class=play>${products[i].price}</p>
          </div>
            </div>`
 
}
