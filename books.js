const book = document.querySelector(".books")

const key = "AIzaSyA_lsGPCadoBHVtntwN56PL7S-GVV7cHX4"


async function fetchData() {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=search+terms&key=${key}`)
    const data = await res.json();
    console.log(data)
    console.log(data.item)
    

    data?.items.forEach(element => {
        // const container = document.createElement('div');
        // const itemElement = document.createElement('div');
        // itemElement.classList.add('item');
        // const image = document.createElement('img');
        // image.src = ;
        // itemElement.appendChild(image);
        // const name = document.createElement('h2');
        // name.textContent = element.volumeInfo.title;
        // itemElement.appendChild(name);
        // const description = document.createElement('p');
        // description.textContent = element.volumeInfo.description;
        // itemElement.appendChild(description);
        // document.body.appendChild(itemElement);
        // const author = document.createElement('p');
        // author.textContent = element.volumeInfo.authors;
        // itemElement.appendChild(author);
        
        book.innerHTML += `
        <a href=single.html?bookid=${element.id}>
        <div class="book" >
        <img src=${element.volumeInfo.imageLinks.thumbnail}/>
        <h3>${element.volumeInfo.title}</h3>
        <p>${element.volumeInfo.authors}</p>
        </a>
        </div>
        
        `
        
    });

    


}





fetchData()