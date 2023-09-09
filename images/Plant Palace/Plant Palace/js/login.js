let login = document.getElementById("login");
login.addEventListener("click",function(){
    // alert("done");
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // console.log(email+password);

    let checkemail = localStorage.getItem("email");
    let checkpassword = localStorage.getItem("password");

    if(email === checkemail && password === checkpassword){
        alert("you are successfully Login");
        window.location.href="index.html";
      
    }
    else{
        alert("please Enter Valid Email and Password");
    }
    

});
  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);
