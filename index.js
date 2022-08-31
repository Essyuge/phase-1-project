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

let listBooks=document.getElementById('results');
let searchValue=document.getElementById('search');
let form=document.getElementById('form');




form.addEventListener('submit',handleForm);
  

function handleForm(e){
e.preventDefault();
getBooks(searchValue.value)
searchValue.value=""

}

const options = {
  method: 'GET',
  headers: {
	  'X-RapidAPI-Key': '94fe485109mshedd44d0eba2be13p110c16jsn5262e9954e7e',
	  'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
  }
};

// Here we are calling `fetch()` and passing a URL to a data source as the
// argument. The function call returns a Promise object that represents what the data
// source sent back. It does not return the actual content. (More about this
// later.)
let result;

const getBooks=(book)=>{
fetch('https://hapi-books.p.rapidapi.com/search/javascript', options)
  .then(response => response.json())
  .then(response => {console.log(response)
   console.log(book)
	  if (book!==undefined) {
	   result=response.filter(book1=>book1.name==book)
	   let newResult=result.pop()
	   console.log("result1",newResult)
	   renderBook(newResult)}
	   else{
	  result=response.map(book1=>renderBook(book1))}} )
   .catch(err => console.error(err));
	console.log("result",result)}



	console.log(getBooks())


getBooks




function renderBook(book){
  listBooks.innerHTML+=`
	<div class="card">
	 <h1 class="title">${book.name}</h1>
	 <img src=${book.cover} alt=${book.name} >    
	 <p class="spacing">${book.year}</p>
	 <a class="spacing"  href= "https://www.goodreads.com/book/show/2998152-javascript?from_search=true&from_srp=true&qid=qcVDYmlUhy&rank=1" target="_blank" >Read<a/>
	 <button>Remove </button>
	 </div>`

}  