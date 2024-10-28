// Function for pre loading
function loadingAnimation(){
    // Line Animation
    let tl = gsap.timeline();
    tl.from("#line h1",{
        y:150,
        stagger: 0.25,
        duration : 0.6,
        delay : 0.5
    });


    // For Wait Message
    tl.from("#waitMsg",{
        opacity : 0,
        scale: 1,
        x:300
    })

    // Counter
    tl.from("#counter",{
        opacity : 0,
        onStart: function(){
            let h5Text = document.querySelector("#increased");
            let grow = 0;
            setInterval(() => {
                if(grow < 100){
                    h5Text.innerHTML = grow++;
                }
                else{
                    h5Text.innerHTML = grow;
                }
            }, 33);
        }
    });

    // For h2
    tl.to("#line h2",{
        animationName:"change",
        opacity: 1,
        delay : 0.4
    });

    // Remove Loader
    tl.to("#loader",{
        opacity: 0,
        duration: 0.4,
        delay: 4,
    });

    // Bring Home Page
    tl.from("#page1",{
        delay:0.2,
        y:1600,
        opacity:0,
        duration:0.5,
        ease:Power4
    });

    // Hide Display 
    tl.to("#loader",{
        display : "none"
    });
}

// Custom Cursor
function customCursor(){
    document.addEventListener("mousemove",function(dets){
        gsap.from("#cursor",{
            left: dets.x,
            top: dets.y,
        })
    });
    // Applying magnetic Effect
    Shery.makeMagnet(".navBar li",{});
}

// Calling Function
loadingAnimation();
customCursor();