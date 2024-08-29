function page1(){
    var tl = gsap.timeline()


tl.from("nav h1,nav h4, nav button",{
    y :-40,
    opacity : 0,
    delay : 0.5,
    duration : 0.6,
    stagger : 0.15
})

tl.from(".center .center-part1 h1",{
    x : -200,
    opacity : 0,
    duration : 0.5
},"-=0.3")
tl.from(".center .center-part1 p",{
    x : -100,
    opacity : 0,
    duration : 0.4
})
tl.from(".center .center-part1 button",{
    opacity : 0,
    duration : 0.4
})

tl.from(".center-part2 img",{
    opacity : 0,
    x : 200,
    duration : 0.5
},"-=0.7")

tl.from(".section1bottom img",{
    opacity : 0,
    y : 30,
    stagger : 0.3,
    duration : 0.6
})


}

function page2(){
    
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        start: "top 50%",
        scrub:2,
        end:"top 0"
    }
})

tl2.from(".services",{
    y : 40,
    opacity : 0,
    duration : 0.5
})

tl2.from(".line1.left",{
    x : -300,
    opacity : 0,
    duration :1
},"anime")

tl2.from(".line1.right",{
    x : 300,
    opacity : 0,
    duration :1,
    delay : 1
},"anime2")
tl2.from(".line2.left",{
    x : -300,
    opacity : 0,
    duration :1,
    delay : 1
},"anime2")

tl2.from(".line2.right",{
    x : 300,
    opacity : 0,
    duration :1
},"anime")
}

page1();
page2();
