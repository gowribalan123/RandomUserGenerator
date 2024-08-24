const img=document.getElementById("userImg");
const email=document.getElementById("email");
const name=document.getElementById("name");

const fetchUser=()=>{
    fetch('https://randomuser.me/api/')
    .then(response=>response.json())
    .then(data=>{const user=data.results[0];
        name.textContent=`${user.name.first}${user.name.last}`
        email.textContent=user.email
        img.src=user.picture.large

    })
    .catch(error=>console.log(error))
    
}