document.getElementById('login-btn')
.addEventListener("click",function(){
    console.log("Button clicked")

    const mobileNumber = 12345678910;
    const pinNumber = 1234;
    const mobileNumberValue = document.getElementById('mobile-number').value
    const mobileNumberValueConverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById('pin-number').value;
    const pinNumberValueConverted = parseInt(pinNumberValue);
    console.log(mobileNumberValueConverted,pinNumberValueConverted)

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        console.log("matched")
        window.location.href="./home.html"
    } else{
        console.log("Error")
    }
})

