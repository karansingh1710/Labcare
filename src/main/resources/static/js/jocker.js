var h1s= document.querySelectorAll("h1")

            var clutter="";

            h1s.forEach(function(elem){
                var h1=elem.textContent
                var splittedText=h1.split("");
                console.log(splittedText);
                splittedText.forEach(function(element){
                clutter+= `<span>${element}</span>`
                console.log(clutter);
        })
        elem.innerHTML= clutter;
        console.log(elem);

    })

        gsap.from("header h1 span",{
            color:"#ffff",
            stagger:.05,
            scrollTrigger:{
                trigger:"#header",
                scroller:"body",
                start:"top 0%",
                end:"top -120%",
                pin:true,
                scrub:3
            }
        })