

/**********dom start***********/
$(document).ready(()=>{
    $(".main #home").addClass("active");
    $(".nav #home").addClass("active_");
    let slider = document.querySelector('.main').children;
    let nav = document.querySelectorAll('.nav a');

    let Remove_class =()=>{
        for (let i = 0; i < slider.length; i++) {
            slider[i].classList.remove("active");
             nav[i].classList.remove("active_");
        }
    }
    $('.nav').on('click',(ev)=>{
        let ids = ev.target.id;
        setTimeout(() => {
            if(ev.target.tagName == "A"){
                Remove_class();
                $(`.main #${ids}`).addClass("active");
                $(`.nav #${ids}`).addClass("active_"); 
                let tl = gsap.timeline({defaults:{duration:1}});
                if(ids == "about"){
                    tl.from('.about_c1 .content_ab .content .text.one',{x:"-100%" ,ease:Expo.easeInOut})
                      .from('.about_c1 .content_ab .content .text.two',{x:"-100%" ,ease:Expo.easeInOut},"-=.4")
                      .from('.about_c1 .content_ab .content .text.tree',{x:"-100%" ,ease:Expo.easeInOut},"-=.4")
                      .from('.main #about .about_c2 h1',{ opacity:0 ,y:100 ,ease:Expo.easeInOut},"-=.4")
                }
                if(ids == "skill"){
                    tl.from('.skills.one',{x:"100%" ,ease:Expo.easeInOut},"+=.8")
                      .from('.skills.tree',{x:"-100%" ,ease:Expo.easeInOut},"-=.5")
                }
                
            }
        }, 1000);
       
    });

    /**********gsap start****** */
    let tl = gsap.timeline({defaults:{duration:1}});
    tl/*.to('.nav li',{visibility:"hidden",opacity:0})
    .from('.home_star #hello',{ opacity:0 ,x:-100 ,ease:Expo.easeInOut})
    .from('.home_star #myname',{opacity:0 ,x:-100 ,ease:Expo.easeInOut})
    .to('.home_star',{left:"-100%" ,ease:Expo.easeInOut},"+=1")
    .from('.home_content h1',{opacity:0 ,x:-100 ,ease:Expo.easeInOut},"-=.8")
    .from('.home_content h2',{opacity:0 ,x: 100 ,ease:Expo.easeInOut},"-=.8")
    .from('.home_content2 h1',{opacity:0 ,x:-100 ,ease:Expo.easeInOut},"-=.8")
    .from('.home_content2 h3',{opacity:0 ,x: 100 ,ease:Expo.easeInOut},"-=.8")
    .from('.home_content3 h1',{opacity:0 ,x:-100 ,ease:Expo.easeInOut},"-=.8")
    .from('.home_content3 h3',{opacity:0 ,x: 100 ,ease:Expo.easeInOut},"-=.8")
    .from('.ellipse-container',{opacity:0,ease:Expo.easeInOut},"-=.6")
    .to('.nav li',{visibility:"visible",opacity:1},"+=.8")
    */.add(Set_animate_text());
})
/************set animate *******/
function Set_animate_text() {
    document.querySelector(".home_content h1").style.animation=".5s left-animete ease-in-out";
    document.querySelector(".home_content h2").style.animation=".5s left-animete-revers ease-in-out";

    document.querySelector(".home_content2 h1").style.animation=".5s left-animete ease-in-out";
    document.querySelector(".home_content2 h3").style.animation=".5s left-animete-revers ease-in-out";

    document.querySelector(".home_content3 h1").style.animation=".5s left-animete ease-in-out";
    document.querySelector(".home_content3 h3").style.animation=".5s left-animete-revers ease-in-out";
}
/*************skill progress bar********************* */
$(function(){
    $('.skills .circle .circlechart').circlechart();
  });