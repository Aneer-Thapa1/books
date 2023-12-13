async function fetchData(){
    const res = await fetch(`https://dattebayo-api.onrender.com/akatsuki`)
    const data = await res.json()
    console.log(data)

    // const itemContainer = document.createElement('div')
    // console.log(itemContainer)
    // console.log(data.akatsuki)
    // data?.akatsuki.forEach(function (item){
    //     const itemElement = document.createElement('div');
    //     const image = document.createElement('img');
    //     image.src = item.images[0];
    //     itemElement.appendChild(image);
    //     const name = document.createElement('h2');
    //     name.textContent = item.name;
    //     itemElement.appendChild(name);
    //     const family = document.createElement('p');
    //     family.innerHTML = item.family?.creator;


    //     itemContainer.appendChild(itemElement);
    // })

    // document.body.appendChild(itemContainer);
}

fetchData()

