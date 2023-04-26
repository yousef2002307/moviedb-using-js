let section = document.querySelector("section");
function getParamValue(){
    try {
        
    
    let index = location.href.indexOf("?val=");
    let paramVal = location.href.slice(index+5,);
    return paramVal;
    }
    catch (error) {
     console.log(error)   
    }
}
function RenderHtml(data){
    try {
        
    
section.innerHTML = `
<img src='${data.Poster}'/><div>
<h2>${data.Title}</h2>
<p>${data.Plot}</p>
<a href='index.html'><button>Go Back</button> <a/>
</div>
`
return "every thinge is ok";
} catch (error) {
      console.log(error);  
}
}
async function   apiRequestForASingleMovie(paramVal){
let response = await fetch(`https://www.omdbapi.com/?i=${paramVal}&apikey=f5a4b56f`);
let data = await response.json();
return data;
}
function checkingUrl(regex){
    try{
    if(location.href.match(regex)){
     let paramVal = getParamValue();
      apiRequestForASingleMovie(paramVal).then(data => {
        RenderHtml(data);
      }).catch(error => {
        console.log(error);
      });
    }else{
       section.innerHTML = "there is somethinge wrong with your url <a href='index.html'><button>Go Back</button> <a/>"
        return '';
    }
}catch(error){
    console.log(error);
}
   
}
checkingUrl(/\?val=/ig)
