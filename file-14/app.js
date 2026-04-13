fetch('https://dummyjson.com/products').then(res => res.json())
async function getProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=10');  
    if (!response.ok) {
        throw new Error("Could not fetch data");
    }
    const data = await response.json();

    const list = document.getElementById('product-list');
    data.products.forEach(product => {
      list.innerHTML += `
        <div class="card hover:scale-[1.1] border-4 border-transparent hover:border-[#FFEAD3] transition-[0.8] border-double">
          <img src="${product.thumbnail}" alt="${product.title}" class="w-[250px] h-[250px]">
          <h3 class="text-[23px] font-[700] text-center text-[#FFEAD3]">${product.title}</h3>
          <p class="text-[20px] font-[500] text-[#9E3B3B] text-center">${product.price}$</p>
        </div>
      `;
    });
  } catch (error) {
    console.error(error);
  }
}
getProducts();