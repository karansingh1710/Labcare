var forms= document.querySelectorAll("form");

forms.forEach(function(form){
    form.addEventListener("submit",function(event){
        event.preventDefault()
    })
})


function animation(){
    var tl= gsap.timeline();

tl.to(".part1 .rotate-div",{
    scale:1.25,
    rotate:(-10),
    scrollTrigger:{
        trigger:".part1",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        pin:true,
        scrub:3,
    }
})

tl.to(".rotate-div3",{
    marginTop:"-20%",
    scrollTrigger:{
        trigger:".part1",
        scroller:"body",
        start:"top 50%",
        end:"top -50%",
        scrub:2
    }
},"a")
tl.to(".rotate-div4",{
    marginTop:50,
    scrollTrigger:{
        trigger:".part1",
        scroller:"body",
        start:"top 50%",
        end:"top -50%",
        scrub:2
    }
},"a")
tl.to(".rotate-div5",{
    marginTop:"-10%",
    scrollTrigger:{
        trigger:".part1",
        scroller:"body",
        start:"top 50%",
        end:"top -50%",
        scrub:2
    }
},"a")
tl.to(".rotate-div2",{
    marginTop:"-5%",
    scrollTrigger:{
        trigger:".part1",
        scroller:"body",
        start:"top 50%",
        end:"top -50%",
        scrub:2
    }
},"a")

tl.to(".part1-content",{
    opacity:1,
    background:"#04080fb9",
    color:"#ffff",
    scrollTrigger:{
        trigger:".part1-contect",
        scroller:"body",
        start:"top -10%",
        end:"top -100%",
        pin:true,
        scrub:3,
    }
},"a")
tl.to(".part1-content h1",{
    opacity:1,
    scrollTrigger:{
        trigger:".part1-content",
        scroller:"body",
        start:"top 90%",
        end:"top 0%",
        scrub:1
    }
},"a")


tl.to(".scroller",{
    opacity:1,
    scrollTrigger:{
        trigger:".scroller",
        scroller:"body",
        start:"top 90%",
        end:"top 0%",
        scrub:1
    }
},"a")
tl.to(".progress",{
    width:100,
    opacity:1,
    scrollTrigger:{
        trigger:".scroll-progress",
        scroller:"body",
        start:"top 90%",
        end:"top 0%",
        scrub:1
    }
},"a")


tl.to(".part2 .rounded-div",{
    height: "0%",
    top: "0%",
    borderRadius: "0%",
    scrollTrigger:{
        trigger:".part2",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:3,
    }
})
tl.to(".part3 .rounded-div",{
    height: "0%",
    top: "0%",
    borderRadius: "0%",
    scrollTrigger:{
        trigger:".part3",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:3,
    }
})
}
animation();

function createBlog(){
    var tittle= document.querySelector("#tittle")
    var description= document.querySelector("#description")
    var uploadImg= document.querySelector("#blog-img")
    var uploadBlog= document.querySelector("#Upload-Blog")
    console.log(tittle);
    console.log(description);
    console.log(uploadImg);
    console.log(uploadBlog);
    // var imgSrc=document.querySelector(".blog-card img")
    var src="";

    uploadImg.addEventListener("change",function(e){
        if(e?.target?.files && e.target.files[0]){
            src=URL.createObjectURL(e.target.files[0])
        }
        // console.log(src);
    })

    var clutter=""

    uploadBlog.addEventListener("click",function(){

        // if(tittle.value.trim()=== "" && description.value.trim()=== ""){
        //     alert("Please fill-Up tittle, description and image? ")
        // }else if(tittle.value.trim()=== "" ){
        //     alert("Please fill-Up tittle? ")
        // }else if(description.value.trim()=== ""  ){
        //     alert("Please fill-Up discription? ")
        // }else if(uploadImg.src===" " ){
        //     alert("Please upload image? ")
        // }

        clutter+=`<div class="blog-card">
        <img src="${src}" alt="">
        <h2> ${tittle.value} </h2>
        <p> ${description.value} </p>
        </div>`;

        console.log(clutter);
        var blog= document.querySelector(".blog-container").innerHTML+=clutter;
        clutter=" ";
        tittle.value=" ";
        description.value=" ";
    })
}
createBlog();

function searchAnimation(){
    
var videoContainer= document.querySelector(".videos");
var searchBtn= document.querySelector(".search")

var videosData= [
    {src:"https://www.youtube-nocookie.com/embed/MoVO8eVe3gI?si=_hI6j-BuhTpKJcaM",tittle:"UI and UX Design."},
    {src:"https://www.youtube.com/embed/k3zc_l1gcX0?si=Rd-UFMsw2_4MZ6p6",tittle:"How to installing windows10."},
    {src:"https://www.youtube-nocookie.com/embed/sOZ656_WhG4?si=fLixnFWUZQg5ygWh",tittle:"How to become a Hacker."},
    {src:"https://www.youtube.com/embed/bAGCKpGMhCk?si=7eWz8vNszdVX4UIE",tittle:"Let's talk about Devin AI by Harshvandana Sarma."},
    {src:"https://www.youtube.com/embed/ES3lXk_jl_s?si=kyxZbZe4TtGXXHTo",tittle:"Google launched it's DSA course."},
    {src:"https://www.youtube.com/embed/8uEV4fwGynU?si=djHTDQGWYoxYJS5w",tittle:"just leave programing, Devin AI is here."}
]
var videoCard="";
videosData.forEach((video)=>{
    
    videoCard+= `<div class="video-card">
                <iframe src="${video.src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h2>${video.tittle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione.</p>
                </div>`

})
videoContainer.innerHTML=videoCard;
var matching=""
searchBtn.addEventListener("input",function(){
var searchInp= document.getElementById("search")
                var matching= videosData.filter(function(video){
                    return video.tittle.toLocaleLowerCase().startsWith(searchInp.value);
                });
                var newvideoCard="";
                matching.forEach(function(video){
                newvideoCard+= `<div class="video-card">
                <iframe src="${video.src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h2>${video.tittle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione.</p>
                </div>`

                })
            videoContainer.innerHTML= newvideoCard;
            })
}
searchAnimation();