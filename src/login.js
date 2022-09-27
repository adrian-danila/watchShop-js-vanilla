
//Disabled button when input email it's empty

document.getElementById("submit").disabled = true;

document.getElementById("email").addEventListener("keyup", e => {
    if(e.target.value ==""){
        document.getElementById("submit").disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
});


//Local storage accounts

function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "/index.html";
    }
    e.preventDefault();
}