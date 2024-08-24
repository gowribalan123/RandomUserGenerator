const url='https://randomuser.me/api/';

let img=document.getElementById('userImg');
let name = document.getElementById('name');
let email = document.getElementById('email');
let btn = document.getElementById('btn');

btn.addEventListener("click", function() {
    fetch(url)
     .then(handleErrors)
      .then(parseJSON)
      .then(updateProfile)
      .catch(printError)
  });
  
  function handleErrors (result){
    if(!result.ok){
      throw error(result.status);
    }
    console.log(result);
    return result;
  }
  
  function parseJSON (result){
    return result.json();
  }
  
  function updateProfile (profile){
    img.src = profile.results[0].picture.large;
    name.innerHTML = profile.results[0].name.first+ " " + profile.results[0].name.last; ; 
   
    email.innerHTML = profile.results[0].email;
   
    return 1;
  }
  
  function printError (error){
    console.log(error);
  }