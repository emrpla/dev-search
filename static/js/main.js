let searchForm = document.getElementById("searchForm")  
let pageLinks = document.getElementsByClassName("page-link")     

// Ensure the search form exists and things to do 

if(searchForm){
  for(let i = 0 ; pageLinks.lenght > i ; i++){
    pageLinks[i].addEventListener('click',function (e) {

      e.preventDefault()
      
      // Get the data attribute
      let page = this.dataset.page
      
      // Add hidden search input to form
      searchForm.innerHTML += `<input value=${page} name="page" hidden />`
      searchForm.submit()
       

    })
  }

}
