let products=[
    {link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvIlFrBEo5DE1QWHNrkshm0lQNcNUroWaetQ&s",logoname:"Roast & Co.",description:"Specialty Coffee Roasters",ule1:"Menu",ule2:"Our Story",ule3:"Process",ule4:"Locations",ule5:"Shop",link2:"https://cdn-icons-png.flaticon.com/512/691/691132.png",link3:"https://static.wixstatic.com/media/11062b_a5be48d3f8ca441195168dc03a527a7b~mv2.jpg/v1/fill/w_824,h_824,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Three%20Beverages.jpg"},
{productname:"Salted Caramel Latte",link:"https://cdn.prod.website-files.com/6595bdc93391268f77b2a568/693b58fd48fa909bc566fe20_STR_Evergreen_SaltedCaramelBiancoLatte_HeroFood_LowRes-p-500.jpg",price:"8 AZN"},
    {productname:"Cappuccino",link:"https://barashka28.ru/assets/images/product/alernative/kofe.jpg",price:"7 AZN"},
{productname:"Raf",link:"https://cornercoffeestore.com/wp-content/uploads/2021/06/raf-coffee-frothy-espresso-with-cookies.jpg",price:"9 AZN"},
    {productname:"Espresso",link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9PRnzPVTMn_L_JCYVEEVb6NjkrBYgnuDcA&s",price:"5 AZN"},
    {productname:"Mocha",link:"https://gatherforbread.com/wp-content/uploads/2014/10/Dark-Chocolate-Mocha-Square.jpg",price:"7 AZN"},
    {productname:"Irish Cofee",link:"https://www.destinationcocktails.fr/wp-content/uploads/2018/04/cocktail-irishcoffee-1.jpg",price:"8 AZN"},
    {productname:"Iced Latte",link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSODFhuLOPp5wdSVp5-ExsQaub94Xvocw74UA&s",price:"9 AZN"},
    {productname:"Caramel Frappuccino",link:"https://simplyhomecooked.com/wp-content/uploads/2025/07/caramel-frappuccino-recipe-2.jpg",price:"10 AZN"},
{productname:"Flat White",link:"https://methodicalcoffee.com/cdn/shop/articles/Flat_white_sitting_on_a_table_af78d6b5-75ea-4f88-bec7-6505412042f8.jpg?v=1761756646&width=1200",price:"6 AZN"},
    {productname:"Affogato",link:"https://images.ctfassets.net/v601h1fyjgba/zfwTBquwJXUs2JZjZI8v4/82fc88f9d99ce3e8e9fe655ae87cfc12/Affogato.jpg",price:"7 AZN"},
{productname:"Turkish Coffee",link:"https://www.thebossykitchen.com/wp-content/uploads/2018/02/Turkish-Coffee-square-picture0-500x500.jpg",price:"6 AZN"},
    {productname:"Vienna",link:"https://caffelab.com/wp-content/uploads/sites/4/2025/04/viennese-coffee.jpeg",price:"6 AZN"},
]
let dessertprod=[
    {link:"https://www.giallozafferano.com/images/260-26067/Tiramisu_650x433_wm.jpg",productname:"Tiramisu",price:"8 AZN"},
    {link:"https://www.seriouseats.com/thmb/VAuEFUAePPa4QXEP3dhBHA4RvJA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20250904-SEA-WhiteChocolateCheesecake-LorenaMasso-HERO-206c88529afb4abbb2ca8f114b1d0f2b.jpg",productname:"White Chocolate Cheesecake",price:"9 AZN"},
    {link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQVSUF4xhs7nLyFK6PhTfwTH-wETYGmVpeYg&s",productname:"Chocolate Muffin",price:"5 AZN"},
    {link:"https://sugargeekshow.com/wp-content/uploads/2022/12/italian_macaron_Featured.jpg",productname:"Macaron",price:"5 AZN"},
    {link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_qnZySSopHYG9PIqtCTsKximDTTh4l2DRA&s",productname:"Ice Cream",price:"6 AZN"},
    {link:"https://twocupsflour.com/wp-content/uploads/2020/12/Untitled-1200-x-1200-px-8.jpg",productname:"Chocolate Cake",price:"7 AZN"},
    {link:"https://noshingwiththenolands.com/wp-content/uploads/2018/01/Belgian-Waffles-IMG_4979-CROPPED.jpg",productname:"Waffles",price:"5 AZN"},
    {link:"https://i.ytimg.com/vi/Ws0XeEBhVrQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDHFZEzl3M5mMdKKxZ11V1p3Kr8-A",productname:"Donut",price:"4 AZN"},
    {link:"https://www.seriouseats.com/thmb/9VFqo0xQxcOIgSyvcStxGYDIzsw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20231113-SEA-LemonMeringuePie-FredHardy-03-1519d9ad68484041bdfaba3c09b67411.jpg",productname:"Lemon Pie",price:"6 AZN"},
    {link:"https://uglyducklingbakery.com/wp-content/uploads/2024/04/biscoff-pudding-square.jpg",productname:"Biskoff Pudding",price:"7 AZN"},
    {link:"https://www.dessarts.com/wp-content/uploads/2020/04/Easy-Fruit-Tart_1200px_1.jpg",productname:"Fruit Tart",price:"5 AZN"}
]
let teaprod=[
    {link:"https://tealeavz.com/cdn/shop/articles/what-does-black-tea-taste-like_44e0b8b2-ad8d-47ff-875a-9e529ba1846c.jpg?v=1769725714",productname:"Black Tea",price:"2 AZN"},
    {link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDl8FNXaDbdP_f68fTe2Z5UeNYfQbto1JoNg&s",productname:"Green Tea",price:"2 AZN"},
    {link:"https://www.guardian.in/cdn/shop/articles/23b991678537b222256d97668f795167.jpg?v=1685010324",productname:"Herbal Tea",price:"3.50 AZN"},
    {link:"https://sudachirecipes.com/wp-content/uploads/2025/03/royal-milk-tea-thumb-500x500.png",productname:"Tea with milk",price:"3 AZN"},
    {link:"https://www.myovacare.com/cdn/shop/articles/cup_of_ginger_root_tea.jpg?v=1718363084",productname:"Ginger Tea",price:"3.50 AZN"},
    {link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4Uw34zkUx-SNwvtfGeRps5Q7t4DnhCvdLw&s",productname:"Lemongrass Tea",price:"3.50 AZN"},
    {link:"https://weeteacompany.com/wp-content/uploads/2024/11/Formosa-Oolong-Tea.webp",productname:"Oolong Tea",price:"4 AZN"},
    {link:"https://www.finedininglovers.com/sites/default/files/article_content_images/mint-tea%C2%A9iStock.jpg",productname:"Mint Tea",price:"2.50 AZN"},
    {link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1wLeeCUYry_NQroCHB-PvlYbwjwONZfoLQ&s",productname:"Cinnamon Tea ",price:"3 AZN"},
    {link:"https://www.firebellytea.com/cdn/shop/articles/a-calming-cup-the-top-lavender-tea-health-benefits-553171.jpg?v=1737804650",productname:"Lavender Tea",price:"3.50 AZN"},
    {link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxx6M2pFs-ZTQsHrBB0qxrPscDSbG9NsxDEw&s",productname:"Raspberry Tea",price:"4 AZN"},
]
let navigation=document.querySelector(".head")
navigation.innerHTML=` 
<div class="d-flex gap-16">
<img src="${products[0].link}" style="border-radius:50%;">
       <div class="p1p2 play">
        <p class="p1">${products[0].logoname}</p>
       <p class="p2">${products[0].description}</p>
       </div></div> 
       <ul class="d-flex list">
        <li>${products[0].ule1}</li>
        <li>${products[0].ule2}</li>
        <li>${products[0].ule3}</li>
        <li>${products[0].ule4}</li>
        <li>${products[0].ule5}</li>
       </ul>
       <div class="orderdiv gap-32">
        <img src="${products[0].link2}" class="link2">
       <div class="order d-flex flex-end">
        <p class="orderp">Order Online</p>
       </div>
       </div>  `
const sun=document.querySelector(".link2")
sun.addEventListener("click",function(){
     document.body.classList.toggle("light-mode");
});
hehediv=document.querySelector(".header")
for(let i=1;i<products.length;i++){

    hehe=document.querySelector(".hehe")
    hehe.innerHTML+=`

        <div class="flex-col mt-5 whole">
                 <div class="imgp">
                    <img src="${products[i].link}" alt="" class="image mb-4">
                 </div>
          <div class="imgtext text-center">
            <p class="mb-4 play">${products[i].productname}</p>
            <p class="play">${products[i].price}</p>
          </div>
            </div>`
 
}
let activeCategory = products.filter(item => item.productname); 

function renderProducts(arr) {
    const container = document.querySelector(".hehe");
    container.innerHTML = ""; 

    if (arr.length === 0) {
        container.innerHTML = `<p class="white">No products found.</p>`;
        return;
    }

    for (let item of arr) {
        container.innerHTML += `
        <div class="flex-col mt-5 whole">
            <div class="imgp">
                <img src="${item.link}" class="image mb-4">
            </div>
            <div class="imgtext text-center">
                <p class="mb-4 play">${item.productname}</p>
                <p class="play">${item.price}</p>
            </div>
        </div>`;
    }
}


const input = document.querySelector(".searchInput");
input.addEventListener("input", function () {
    const value = input.value.toLowerCase();
    const filtered = activeCategory.filter(item => 
        item.productname.toLowerCase().startsWith(value)
    );
    renderProducts(filtered);
});

const coffeebtn = document.querySelector(".coffee");
const dessertbtn = document.querySelector(".desserts");
const teabtn = document.querySelector(".tea");

coffeebtn.addEventListener("click", () => {
    activeCategory = products.filter(item => item.productname);
    renderProducts(activeCategory);
    
});

dessertbtn.addEventListener("click", () => {
    activeCategory = dessertprod;
    renderProducts(activeCategory);
   
});

teabtn.addEventListener("click", () => {
    activeCategory = teaprod;
    renderProducts(activeCategory);
    
});