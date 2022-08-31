// //DOM render function
// function renderOneBook(book)
//   //build Book
//   //  const results= document.querySelector("#results")
//    const card =document.createElement("div")
//    card.className="card"
//    card.innerHTML=`
//    <div class="content" >
 

// document.querySelector("#results").appendChild(card)
// }

  



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '94fe485109mshedd44d0eba2be13p110c16jsn5262e9954e7e',
		'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
	}
};

// Here we are calling `fetch()` and passing a URL to a data source as the
// argument. The function call returns a Promise object that represents what the data
// source sent back. It does *not* return the actual content. (More about this
// later.)

function getBooks(){
  fetch('https://hapi-books.p.rapidapi.com/search/javascript', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}

function initialize (){
  getBooks()

}

initialize()
  
    