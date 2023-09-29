window.onload = function () {
    fetchBooks();
    document.getElementById('submit').onclick = saveProd;
}

async function fetchBooks() {
    const response = await fetch('http://localhost:3000/books',{
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
        }
    });
    const books = await response.json();

    let html = `
    <table id="book-table">
    <tr>
      <th>Id</th>
      <th>Title</th>
      <th>ISBN</th>
      <th>PublishedDate</th>
      <th>Author</th>
      <th>Actions</th>
    </tr>
    `;
    books.forEach(prod => {
        html += `
            <tr id="${prod._id}">
            <td>${prod._id}</td>
            <td id="title-${prod._id}">${prod.title}</td>
            <td id="ISBN-${prod._id}">${prod.ISBN}</td>
            <td id="publishedDate-${prod._id}">${prod.publishedDate}</td>
            <td id="author-${prod._id}">${prod.author}</td>
            <td>
            <button onclick="editById('${prod._id}');">Edit</button>
            <button onclick="deleteById('${prod._id}');">Delete</button>
            </td>
        </tr>
        `
    });
    html += '</table>';
    document.getElementById('books').innerHTML = html;


}

async function saveProd(evt) {
    evt.preventDefault();
    const response = await fetch('http://localhost:3000/books', {
        method: 'POST',
        body: JSON.stringify({
            title: document.getElementById('title').value,
            ISBN: document.getElementById('ISBN').value,
            publishedDate: document.getElementById('publishedDate').value,
            author: document.getElementById('author').value,
        }),
        headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        }
    });

    // i find something wrong so i used the reload;
    // const prod = await response.json();
    // console.log(prod);
    // const html = `
    // <tr>
    // <td>${prod._id}</td>
    // <td>${prod.title}</td>
    // <td>${prod.ISBN}</td>
    // <td>${prod.publishedDate}</td>
    // <td>${prod.author}</td>
    // </tr>
    // `;

    // document.getElementById('book-table').innerHTML += html;
    // document.getElementById('book-add-form').reset();
    const prod = await response.json();
    if (response.status === 403) {
        document.getElementById('error').innerText = prod.error;
    } else {
       
        const html = `
            <tr>
            <td>${prod._id}</td>
            <td>${prod.title}</td>
            <td>${prod.ISBN}</td>
            <td>${prod.publishedDate}</td>
            <td>${prod.author}</td>
        </tr>
        `;

        document.getElementById('book-table').innerHTML += html;
        document.getElementById('book-add-form').reset();
    }
}


async function deleteById(id) {
    const response = await fetch(`http://localhost:3000/books/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
        }
    });
    // const data = await response.json();
    document.getElementById(id).remove();
}

async function editById(id) {
    document.getElementById('book-add-form').style.display = 'none';
    const response = await fetch(`http://localhost:3000/books/${id}`,{
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
        }
    });
    const prod = await response.json();


    let html = `
        <div id="book-edit-form">
            <h1>Edit book</h1>
            <p>Title: <input id="title2" name="title" value="${prod.title}" /></p>
            <p>ISBN: <input id="ISBN2" name="ISBN" value="${prod.ISBN}" /></p>
            <p>PublishedDate:<input id="publishedDate2" name="publishedDate" value="${prod.publishedDate}"/></p>
            <p>Author: <input id="author2" name="author" value="${prod.author}"/></p>
            <button id="submit" onclick="updateProd('${prod._id}')">Submit</button>
        </div> 
    `;
    document.getElementById('edit').innerHTML = html;
}

async function updateProd(id) {
    const title = document.getElementById('title2').value;
    const ISBN = document.getElementById('ISBN2').value;
    const publishedDate = document.getElementById('publishedDate2').value;
    const author = document.getElementById('author2').value;

    const response = await fetch(`http://localhost:3000/books/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            ISBN,
            publishedDate,
            author
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
        }
    });
    // await response.json();
    document.getElementById(`title-${id}`).innerHTML = title;
    document.getElementById(`ISBN-${id}`).innerHTML = ISBN;
    document.getElementById(`publishedDate-${id}`).innerHTML = publishedDate;
    document.getElementById(`author-${id}`).innerHTML = author;

    // document.getElementById(`${id}`).innerHTML = `
    //     <td>${id}</td>
    //     <td>${title}</td>
    //     <td>${price}</td>
    //     <td>${description}</td>
    //     <td>
    //         <button onclick="editById('${id}');">Edit</button>
    //         <button onclick="deleteById('${id}');">Delete</button>
    //     </td>
    // `;
    document.getElementById('book-add-form').style.display = 'block';
    document.getElementById('book-edit-form').style.display = 'none';
}