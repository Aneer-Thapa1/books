const data = new URLSearchParams(window.location.search);

const id = data.get("bookid")
console.log(id)

const container = document.querySelector(".content");
const title = document.querySelector(".title");


async function fetchData(){
    const book = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)

    const bookData = await book.json()
    console.log(bookData)

    title.textContent = bookData.volumeInfo.title;
    
    container.innerHTML = `
    
    <div class="left">
    <img src="${bookData.volumeInfo.imageLinks.thumbnail}" alt="" />
    </div>
    <div class="right">
    <p>${bookData.volumeInfo.description}</p>
    
    </div>
    
    `
   
}

fetchData()

