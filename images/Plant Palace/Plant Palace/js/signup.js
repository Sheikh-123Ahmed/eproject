console.log("shaheer");


let btn = document.getElementById("Btn");
btn.addEventListener('click',function(){
    // alert("done");
    let a = document.getElementById("Uname").value;
    let b = document.getElementById("Email").value;
    
    let c = document.getElementById("Password").value;
    let d = document.getElementById("Cpassword").value;


    // let result = a+b+c+d;

    // console.log(result);

    if(a !== "" && b !== "" && c !== "" && d !== "" && c === d){
        localStorage.setItem("uname",a);
        localStorage.setItem("email",b);
        localStorage.setItem("password",c);
        localStorage.setItem("cpassword",d);

        alert("You Account successfully Created");
        window.location.href="login.html";
        let remove_a = a.value="";
        let remove_b = b.value="";
        let remove_d = d.value="";

        let remove_c = c.value="";

        

    }
    else{
        alert("Please enter valid information");
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



