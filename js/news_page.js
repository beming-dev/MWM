let btn = document.getElementById('btn');
let email = document.getElementById('email');
let loading = document.getElementById("loading");
let exit = document.getElementById("exit");

exit.addEventListener('click', ()=>{
    loading.remove();
})

btn.addEventListener('click', ()=>{
    if(validateEmail(email.value)){
        btn.style.width = "56px";
        btn.innerHTML = "";
        btn.style.borderRadius = "56px";
        let div = document.createElement('div');
        div.classList = "circle";
        setTimeout(() => {
            btn.appendChild(div);
        }, 300);
        
        setTimeout(() => {
            div.remove();
            let div2 = document.createElement('div');
            div2.classList = 'check';
            btn.appendChild(div2);
        }, 1000)

        setTimeout(() => {
            loading.remove();
        }, 1800)

    }else{
        alert("email incorrect");
    }
});

// function validateEmail(email) {
//     let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
//     return re.test(email);
// }

function validateEmail( email ) {    
    var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return (email != '' && email != 'undefined' && regex.test(email)); 
}