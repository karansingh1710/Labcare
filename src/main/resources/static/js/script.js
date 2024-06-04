        var registerbtn= document.querySelector(".register");
        var logpage= document.querySelector(".login-page")
        var landingpage= document.querySelector(".landing-page")
        var about= document.querySelector("#about")
        var login= document.querySelector(".main-login");
        var signup= document.querySelector(".main-signUp");
        var forgetPassword= document.querySelector(".main-forgetPassword");
        var signlink= document.querySelector(".sign1")
        var loglink= document.querySelector(".log1")
        var forgetPassworlink= document.querySelector(".forpass1")
        var mainsignupbtn= document.querySelector(".mainsignup")
        var otpEmail=""


        function landAnimation(){
            registerbtn.addEventListener("click", function(){
            landingpage.style.transform= "translateY(100%)"
            logpage.style.transform= "translateY(0%)"
            about.style.transform="translateY(200%)"
        })
        }

        function logSigForpass(){
            signlink.addEventListener("click",function(){
                forgetPassword.style.transform= "translateY(-100%)"
                login.style.transform= "translateY(-100%)"
                signup.style.transform= "translateY(0%)"
            })
            loglink.addEventListener("click",function(){
                forgetPassword.style.transform= "translateY(-100%)"
                signup.style.transform= "translateY(-100%)"
                login.style.transform= "translateY(0%)"
            })
            forgetPassworlink.addEventListener("click",function(){
                otpEmail= prompt("Enter your email:")
                signup.style.transform= "translateY(-100%)"
                login.style.transform= "translateY(-100%)"
                forgetPassword.style.transform= "translateY(0%)"
            })

            mainsignupbtn.addEventListener("click",function(){
                login.style.transform= "translateY(-100%)"
                forgetPassword.style.transform= "translateY(-100%)"
                signup.style.transform= "translateY(0%)"
            })
        }
        
        logSigForpass();
        landAnimation();



        var loginBtn=document.querySelector("#loginBtn")
        var email=document.querySelector("#email")
        var password=document.querySelector("#password")

        loginBtn.addEventListener("click",function(){
            if(email.value==="akash875750@gmail.com" && password.value==="yadawchiku07"){
                alert("you have been successfuly login.")
                email.value=""
                password.value=""
            }else if(email.value==="" && password.value===""){
                alert("please enter email and password!")
            }else if(email.value===""){
                alert("please enter your email!")
            }else if(password.value===""){
                alert("please enter your password!")
            }else{
                email.value=""
                password.value=""
            }
        })

        var signupBtn=document.querySelector("#signupBtn")
        var signEmail=document.querySelector(".signupemail")
        var signupPassword=document.querySelector(".password")
        var signupConformPassword=document.querySelector(".new-pass")

        signupBtn.addEventListener("click",function(){
            if(signEmail.value==="" && signupPassword.value==="" && signupConformPassword.value===""){
                alert("please enter your email, password and conformPassword!")
            }else if(signEmail.value==="" ){
                alert("please enter your email!")
            }else if(signupPassword.value===""){
                alert("please enter your new password!")
            }else if(signupPassword.value!==signupConformPassword.value && signupConformPassword.value!==signupPassword.value){
                alert("please enter correct password in both!")
            }else{
                // alert("you have been successfully signUp!")
                signEmail.value="";
                signupPassword.value="";
                signupConformPassword.value=""
            }
        })


        var savePasswordBtn= document.querySelector("#Save-passwordBtn")
        var emailOTP= document.querySelector(".otp")
        var rePassword= document.querySelector(".re-password")
        var conformRePassword= document.querySelector(".conform-re-password")

        console.log(emailOTP);
        console.log(rePassword);
        console.log(conformRePassword);
        console.log(savePasswordBtn);
        
        savePasswordBtn.addEventListener("click",function(){
            if(emailOTP.value===""){
                console.log(emailOTP.value);
                alert("Please enter your OTP!")
            }else if(rePassword.value===""){
                alert("Please enter your new password!")
            }else if(conformRePassword.value===""){
                alert("Please enter your verify Password!")
            }else if(rePassword.value!==conformRePassword.value && conformRePassword.value!==rePassword.value){
                alert("please enter your correct password in both!")
            }else{
                alert("You have been successfully change your password!")
                emailOTP.value="";
                rePassword.value=""
                conformRePassword.value=""
            }
        })





        var h1= document.querySelector(".top-header p")

            var clutter="";

            var text=h1.textContent
            var splittedText=text.split("");
            console.log(splittedText);
            splittedText.forEach(function(element){
            clutter+= `<span>${element}</span>`
            console.log(clutter);
            h1.innerHTML= clutter;
        })

        var tl = gsap.timeline()

        // tl.from(".heading h2,.heading h1",{
        //     y:100,
        //     transform: "skewY(15deg)",
        //     opacity:0,
        //     stagger:.3,
        // })

        // tl.from(".landing-content p",{
        //     y:50,
        //     opacity:0,
        // })

        tl.from(".top-header p span",{
            color:"#04080f67",
            stagger:.05,
            scrollTrigger:{
                trigger:"#about",
                scroller:"body",
                start:"top 80%",
                end:"top 0%",
                scrub:3
            }
        })

        tl.from(".content1,.content2,.content3",{
            y:100,
            opacity:0,
            stagger:.3,
            scrollTrigger:{
                trigger:".cards-content",
                scroller:"body",
                start:"top 90%",
                end:"top 50%",
                scrub:3
            }
        })

        var allForms= document.querySelectorAll("form")

        allForms.forEach(function(form){
            form.addEventListener("submit",function(e){
                e.preventDefault();
            })
        })
