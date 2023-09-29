window.onload = function() {
    fetchBooks();



  // update
  const formContainer = document.getElementById("bookForm");
  const submitButton = document.getElementById("updateBtn");
  
    // Function to create the form and handle form submission
    function createForm() {
      const formHtml = `
        <form id="bookForm">
        <input type="text" id="id" placeholder="Id" required />
          <input type="text" id="titleInput" placeholder="Title" required />
          <input type="text" id="isbnInput" placeholder="ISBN" required />
          <input type="text" id="publishedDateInput" placeholder="Published Date" required />
          <input type="text" id="authorInput" placeholder="Author" required />
          <button type="submit">Submit</button>
        </form>
      `;
  
      // Append the form to the formContainer
      formContainer.innerHTML = formHtml;
  
      const bookForm = document.getElementById("bookForm");
  
      // Add event listener for form submission
      bookForm.addEventListener("submit", handleSubmit);
    }
  
    // Function to handle form submission and call the backend API
    async function handleSubmit(event) {
        event.preventDefault();
        const id = document.getElementById("id").value;
        const title = document.getElementById("titleInput").value;
        const ISBN = document.getElementById("isbnInput").value;
        const publishedDate = document.getElementById("publishedDateInput").value;
        const author = document.getElementById("authorInput").value;
    
        try {
          const response = await fetch("http://localhost:3000/books/"+id, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id,title, ISBN, publishedDate, author }),
          });
    
          if (response.ok) {
            // Book added successfully
            alert("Book updated successfully!");
            fetchBooks();
            location.reload();
            formContainer.innerHTML = ""; // Clear the form after submission
          } else {
            // Handle the error here
            alert("Failed to update book.");
          }
        } catch (error) {
          console.error("Error adding book:", error);
          alert("Failed to update book. Please check the console for more details.");
        }
      }
    
      // Add event listener for the submit button
      submitButton.addEventListener("click", () => {
        createForm();
      });

  // delete
  const formContainer2 = document.getElementById("bookForm");
  const deleteButton = document.getElementById("deleteBtn");
  
    // Function to create the form and handle form submission
    function createFormDelete() {
      const formHtml = `
        <form id="bookForm">
        <input type="text" id="id" placeholder="Id" required />
          <button type="submit">Submit</button>
        </form>
      `;
  
      // Append the form to the formContainer
      formContainer2.innerHTML = formHtml;
  
      const bookForm = document.getElementById("bookForm");
  
      // Add event listener for form submission
      bookForm.addEventListener("submit", handleSubmitDelete);
    }
  
    // Function to handle form submission and call the backend API
    async function handleSubmitDelete(event) {
        event.preventDefault();
        const id = document.getElementById("id").value;
    
        try {
          const response = await fetch("http://localhost:3000/books/"+id, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id}),
          });
    
          if (response.ok) {
            alert("Book delete successfully!");
            fetchBooks();
            location.reload();
            formContainer.innerHTML = ""; // Clear the form after submission
          } else {
            alert("Failed to delete book.");
          }
        } catch (error) {
          console.error("Error delete book:", error);
          alert("Failed to delete book. Please check the console for more details.");
        }
      }
    
      // Add event listener for the submit button
      deleteButton.addEventListener("click", () => {
        createFormDelete();
      });

}

async function fetchBooks(){
    const response = await fetch('http://localhost:3000/books');
    const books = await response.json();

    let html = `
    <table>
    <tr>
      <th>Id</th>
      <th>Title</th>
      <th>ISBN</th>
      <th>PublishedDate</th>
      <th>Author</th>
    </tr>
    `;

    books.forEach(prod => {
        html += `
            <tr>
            <td>${prod.id}</td>
            <td>${prod.title}</td>
            <td>${prod.ISBN}</td>
            <td>${prod.publishedDate}</td>
            <td>${prod.author}</td>
        </tr>
        `
    });
    html += '</table>';
    document.getElementById('bookList').innerHTML = html;
}

// submit
document.addEventListener("DOMContentLoaded", () => {
  const formContainer = document.getElementById("bookForm");
  const submitButton = document.getElementById("submitBtn");
  
    // Function to create the form and handle form submission
    function createForm() {
      const formHtml = `
        <form id="bookForm">
          <input type="text" id="titleInput" placeholder="Title" required />
          <input type="text" id="isbnInput" placeholder="ISBN" required />
          <input type="text" id="publishedDateInput" placeholder="Published Date" required />
          <input type="text" id="authorInput" placeholder="Author" required />
          <button type="submit">Submit</button>
        </form>
      `;
  
      // Append the form to the formContainer
      formContainer.innerHTML = formHtml;
  
      const bookForm = document.getElementById("bookForm");
  
      // Add event listener for form submission
      bookForm.addEventListener("submit", handleSubmit);
    }
  
    // Function to handle form submission and call the backend API
    async function handleSubmit(event) {
        event.preventDefault();
    
        const title = document.getElementById("titleInput").value;
        const ISBN = document.getElementById("isbnInput").value;
        const publishedDate = document.getElementById("publishedDateInput").value;
        const author = document.getElementById("authorInput").value;
    
        try {
          const response = await fetch("http://localhost:3000/books", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, ISBN, publishedDate, author }),
          });
    
          if (response.ok) {
            // Book added successfully
            alert("Book added successfully!");
            fetchBooks();
            location.reload();
            formContainer.innerHTML = ""; // Clear the form after submission
          } else {
            // Handle the error here
            alert("Failed to add book.");
          }
        } catch (error) {
          console.error("Error adding book:", error);
          alert("Failed to add book. Please check the console for more details.");
        }
      }
    
      // Add event listener for the submit button
      submitButton.addEventListener("click", () => {
        createForm();
      });
    });

