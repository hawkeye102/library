const library = [];

function book(authorname, bookname, cost, read) {
    this.authorname = authorname;
    this.bookname = bookname;
    this.cost = cost;
    this.read = read;
}
book.prototype.toggleread= function(){
    this.read=!read;
}

function toggleread(index){
    library[index].toggleread();
    render();
}
function render(){
    let libraryel=document.querySelector("#library");
    libraryel.innerHTML="";
    for(let i=0; i<library.length; i++){
       let book=library[i];

       let bookel=document.createElement("div");
       bookel.classList.add("book-card");
       bookel.innerHTML =`
     <div class="card-header">
       <h1 class="book name">${book.bookname}</h1>
       <h4  class="author">${book.authorname}</h4>;
    </div>
        <div class="card-body">

        <p class="read-status">${book.read ? "read" : "not read yet"}</p>
        <button class="remove-btn" onclick="removebook(${i})">Remove</button>
        </div> `;                
                        
       libraryel.appendChild(bookel);
    }

   
    
}

function removebook(index){

library.splice(index,1);
render();

}

function addbooktolibrary() {
    let bookname = document.querySelector("#book_name").value;
    let authorname = document.querySelector("#author_name").value;
    let cost = document.querySelector("#cost").value;
    let read = document.querySelector("#read").checked;

    let newbook = new book(authorname, bookname, cost, read);
    library.push(newbook);
    console.log(library);

    render();
}

document.addEventListener("DOMContentLoaded", function () {
    let newbookbutton = document.querySelector("#new");
    newbookbutton.addEventListener("click", function () {
        let newbookform = document.querySelector("#fill");
        newbookform.style.display = "block";
    });

    document.querySelector("#fill").addEventListener("submit", function (event) {
        event.preventDefault();
        addbooktolibrary(); 
    });
});
