fetch('https://dummyjson.com/products').then(res => res.json())
async function getProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products');  
    const data = await response.json();

    const list = document.getElementById('product-list');
    data.products.forEach(product => {
      list.innerHTML += `
      
        <div class="card hover:scale-[1.03] border-1 hover:border-[#ffc8dd] border-4 transition-[0.8] border-double bg-[#ffa5ab]">
          <img src="${product.images[0]}" alt="${product.title}" class="w-[250px] h-[250px] ">
          <div class="w-full bg-[#a53860] h-[150px] p-[10px] flex flex-col gap-[5px]"> 
           <h3 class="text-[23px] font-[700] text-[#f9dbbd] ">${product.title}</h3>
          <p class="text-[20px] font-[500] text-[#f9dbbd]">Price: ${product.price}$</p></div>
         
        </div>
      `;
    });
  } catch (error) {
    console.error(error);
  }
}
getProducts();