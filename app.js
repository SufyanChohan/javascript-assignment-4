function otpgenerate(){
    let random = Math.floor (Math.random()*5000);
    console.log(random);
    document.getElementById("inp1").value=random;
}