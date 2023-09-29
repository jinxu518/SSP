window.onload = function() {
    fetchProducts();
}

async function fetchProducts(){
    const response = await fetch('http://localhost:3000/products');
    const products = await response.json();

    let html = `
    <table>
    <tr>
      <th>Id</th>
      <th>Title</th>
      <th>Price</th>
      <th>Description</th>
    </tr>
    `;

    products.forEach(prod => {
        html += `
            <tr>
            <td>${prod.id}</td>
            <td>${prod.title}</td>
            <td>${prod.price}</td>
            <td>${prod.description}</td>
        </tr>
        `
    });
    html += '</table>';
    document.getElementById('products').innerHTML = html;
}