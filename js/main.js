let input = document.querySelector("input");
let form = document.querySelector("form");
let p =   document.querySelector("p");
let section = document.querySelector("section");

//stop form from submitting
////////////calling the function with results for teh first time ///////////////////////////////////////
apiRequest("batman").then(data => {
  innerHTML(data);
});
///////////////////////////////////////////////////////////////////////////////////////////////
form.onsubmit = function(e){
  e.preventDefault();
}
input.addEventListener("input",whenInputChange);
function whenInputChange(){
  let inputVal = this.value;
return apiRequest(inputVal).then(data => {


  innerHTML(data);
  ////////////
});
}
async function apiRequest(value){
  
  let data2 = {}
let response = await fetch(`https://www.omdbapi.com/?s=${value}/&apikey=f5a4b56f`);
let data = await response.json();
return data;
//console.log(data)
//showHtml(data)

 
}
function innerHTML(data2){
  console.log(data2)
  let data = {...data2}
  console.log(data);
  //make the contianer empty before filling it agian
section.innerHTML = '';
   
if(data.Response === 'False'){
  p.textContent = "no movies/series with that name"
}else{
  let dataFromSearch = data.Search;
  p.textContent = ""
  dataFromSearch.map(ele => {
    section.innerHTML += `
    <div>
    <aside>
     
  <a href='main.html?val=${ele.imdbID}' data-movie=${ele.imdbID} >  <img src='${ele.Poster}'/></a>
  
  <footer><span>${ele.Title}</span><span>${ele.Year}</span></footer>
  </aside>
  </div>
  `
  });
}
}
//////////////////////////////////////////////////////////////////////////////////////////////