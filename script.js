const submitBtn = document.getElementById('submitBtn');



submitBtn.addEventListener('click', (e) =>{
   e.preventDefault();

   if(validateName()){
    alert("form submited successfully")
   }
});





function validateName(){
    let name = document.getElementById('name').value;

    if(name.lenth == 0){
        nameError.innerHTML = "name id required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*/s)){
        nameError.innerHTML = "write full name";
        return false;
    }
    return true;
}