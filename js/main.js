$(document).ready(function(){
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    })

    gsap.ticker.lagSmoothing(0)

    lenis.stop();

    gsap.to("html, body", { scrollTop: 0 })

    function startLoader(){
        let counterElement = document.querySelector(".count p");
        let currentValue = 0;

        function updateCounter(){
            if (currentValue < 100) {
                let increment = Math.floor(Math.random() * 10) + 1;
                currentValue = Math.min(currentValue + increment, 100);
                counterElement.textContent = currentValue;

                let delay = Math.floor(Math.random() * 200) + 25;
                setTimeout(updateCounter, delay);
            }
        }

        updateCounter();
    }

    startLoader();

    gsap.to(".pre-loader", {
        scale: 0.9,
        delay: 1.5,
        duration: 3.5,
        ease: 'power4',
    })

    gsap.to(".ml16 p", {
        rotateX: 270,
        delay: 1.8,
        duration: 1.5,
        ease: 'power1.inOut',
        stagger: 0.5
    })

    gsap.to(".count", {
        opacity: 0,
        delay: 4.5,
        duration: 0.5,
        ease: 'power2.in',
    })

    gsap.to(".pre-loader", {
        rotateX: 90,
        delay: 5,
        duration: 1,
        ease: 'expo.inOut',
    })
    
    gsap.to(".loading-container", {
        opacity: 0,
        delay: 6,
        onComplete: function(){
            $('.loading-container').hide()
        }
    })

    gsap.to(".wrap", {
        opacity: 1,
        delay: 5,
        onComplete: function(){
            lenis.start();
            $('body').css({'background-color':'#fff'})
            $('.intro_video').css({'width':'calc(30% + ((1920px - 100vw) / 10))'})
        }
    })

    gsap.from(".intro h2", 1.2, {
        delay: 6.2,
        rotateX: -90,
        ease: 'expo.out',
        stagger: 0.1
    })

    gsap.from(".intro_text p, .intro_text span", 0.8, {
        delay: 8.1,
        yPercent: 100,
        opacity: 0,
        ease: 'expo.out'
    })

    gsap.from("header", 0.8, {
        delay: 8.1,
        opacity: 0,
        display: 'none'
    })

    gsap.from(".intro_video", 1, {
        delay: 8,
        scale: 0,
        display: 'none',
        ease: 'expo.out'
    })

    $('nav li').mouseover(function(){
        $(this).stop().animate({'opacity':'1'},200).siblings('li').stop().animate({'opacity':'0.4'},200)
    }).mouseout(function(){
        $('nav li').stop().animate({'opacity':'1'},200)
    })

    $('nav li').click(function(){
        const anchor = $(this).index()
        const intro = $('.intro').offset().top
        const about = $('.about').offset().top * 0.95
        const work = $('.work').offset().top * 0.975
        const contact = $('footer').offset().top + $('footer').height() - $(window).height()

        lenis.stop()

        if(anchor == 0){
            gsap.to("html, body", 1, {
                scrollTop: intro,
                ease: 'expo.out'
            })
        }else if(anchor == 1){
            gsap.to("html, body", 1, {
                scrollTop: about,
                ease: 'expo.out'
            })
        }else if(anchor == 2){
            gsap.to("html, body", 1, {
                scrollTop: work,
                ease: 'expo.out'
            })
        }else if(anchor == 3){
            gsap.to("html, body", 1, {
                scrollTop: contact,
                ease: 'expo.out'
            })
        }

        lenis.start()
    })

    $('h1').mouseover(function(event){
        gsap.to("h1 li", 2, {
            rotateX: 360,
            ease: 'expo.out',
            stagger: 0.1,
            onComplete: function() {
                gsap.set("h1 li", {rotateX: 0})
            }
        })
    })

    gsap.to(".intro_text", {
        scrollTrigger: {
            start: 'top top',
            end: '+=10%',
            scrub: 1,
        },
        y: '-1rem',
        opacity: 0,
    })

    gsap.to(".intro h2", {
        scrollTrigger: {
            start: 'top top',
            end: '20% 20%',
            scrub: 1,
        },
        y: '-10rem',
        stagger: 0.05
    })

    gsap.from(".about_title li", 1, {
        scrollTrigger: {
            trigger: '.about_title',
            start: 'top 80%',
        },
        yPercent: 80,
        ease: 'power2',
        stagger: 0.15,
    })

    gsap.from(".profile_img img", 3, {
        scrollTrigger: {
            trigger: '.about_title',
            start: 'top 80%',
        },
        yPercent: 80,
        ease: 'expo.out',
    })

    gsap.to(".profile", {
        scrollTrigger: {
            trigger: '.profile',
            start: 'top 60%',
            end: 'top 40%',
            scrub: 0.5,
        },
        'width': '100%',
        duration: 10,
        ease: 'none'
    })

    gsap.to(".profile", {
        scrollTrigger: {
            trigger: '.profile',
            start: '30% top',
            end: 'bottom top',
            scrub: 0.1,
        },
        opacity: 0,
        duration: 10,
        ease: 'none'
    })

    gsap.to(".profile_bg", {
        scrollTrigger: {
            trigger: '.profile',
            start: 'top 45%',
            end: 'top top',
            scrub: 0.5,
        },
        borderRadius: '0',
        duration: 10,
        ease: 'none'
    })

    gsap.from(".spotlight_bg", 0.1, {
        scrollTrigger: {
            trigger: '.profile',
            start: 'bottom top',
            scrub: 1.5
        },
        opacity: 0,
        ease: 'circ.in'
    })

    gsap.to(".mission h3", 0.8, {
        scrollTrigger: {
            trigger: '.mission h3',
            start: 'top 60%'
        },
        opacity: 1,
        filter: 'blur(0px)',
        ease: 'power2.out'
    })

    gsap.from(".mission p", 1, {
        scrollTrigger: {
            trigger: '.mission h3',
            start: 'top 60%'
        },
        delay: 0.2,
        opacity: 0,
        y: '6rem',
        stagger: 0.1,
        ease: 'power2'
    })

    gsap.to(".tools h3", 0.8, {
        scrollTrigger: {
            trigger: '.tools h3',
            start: 'top 80%'
        },
        opacity: 1,
        filter: 'blur(0px)',
        ease: 'power2.out'
    })

    gsap.from(".carousel", 1.4, {
        scrollTrigger: {
            trigger: '.carousel',
            start: '35% 80%'
        },
        opacity: 0,
        ease: 'power2'
    })

    $('.carousel_item').mouseenter(function(){
        const itemIndex = $(this).index();

        if(itemIndex == 6 || itemIndex == 12){
            $('.carousel_tooltip').html('PLUG-IN, AUTO-LAYOUT')
        }else if(itemIndex == 7 || itemIndex == 13){
            $('.carousel_tooltip').html('GSAP, Jquery')
        }else if(itemIndex == 8 || itemIndex == 14){
            $('.carousel_tooltip').html('FLEX, ANIMATION, 미디어쿼리')
        }else if(itemIndex == 9 || itemIndex == 15){
            $('.carousel_tooltip').html('마크업, 시맨틱 태그')
        }else if(itemIndex == 10 || itemIndex == 16){
            $('.carousel_tooltip').html('3D 오브젝트, 로고')
        }else if(itemIndex == 11 || itemIndex == 17){
            $('.carousel_tooltip').html('톤 보정, 필터, 배경지우기, 이미지 변형')
        }else{
            $('.carousel_tooltip').html('')
        }

        gsap.to(".carousel_tooltip", 0.2, {
            opacity: 1,
            scale: 1,
            ease: 'expo.out'
        })
    }).mouseleave(function(){
        gsap.to(".carousel_tooltip", 0.2, {
            opacity: 0,
            scale: 0,
            ease: 'expo.out'
        })
    })

    $('.carousel_item').mousemove(function(e){
        const cursorX = e.pageX + 10
        const cursorY = e.pageY + 16

        gsap.to(".carousel_tooltip", 0, {
            x: cursorX,
            y: cursorY
        })
    })

    gsap.from(".tools_mobile", 1.4, {
        scrollTrigger: {
            trigger: '.tools h3',
            start: 'top 80%'
        },
        delay: 0.4,
        opacity: 0,
        ease: 'power2'
    })

    gsap.to("body", {
        scrollTrigger: {
            trigger: '.profile_bg',
            start: 'top top',
            end: 'top top',
            scrub: 0.4
        },
        backgroundColor: '#000000',
        duration: 1,
        ease: 'none'
    })

    gsap.from("body", {
        scrollTrigger: {
            trigger: '.work',
            start: 'top bottom',
            end: 'top 98%',
            scrub: 0.4
        },
        backgroundColor: '#000000',
        duration: 1,
        ease: 'none'
    })

    gsap.from(".resume", 1, {
        scrollTrigger: {
            trigger: '.resume',
            start: 'top 85%',
            end: 'top 70%',
            scrub: 0.2
        },
        opacity: 0,
        y: '1rem',
        ease: 'none'
    })

    $('.resume a').mouseover(function(){
        gsap.from(this, 0.6, { delay: 0.3, '--width': 0, ease: 'expo.inOut' })
        gsap.from(this, 0.8, { '--transform': 'scaleX(1)', ease: 'expo.inOut' })
    })

    gsap.from(".work_title li", 1, {
        scrollTrigger: {
            trigger: '.work_title',
            start: 'top 80%',
        },
        yPercent: 80,
        ease: 'power2',
        stagger: 0.15,
    })

    $('.work_content_wrap>div>div').mouseover(function(){
        $(this).find('.cover').stop().fadeOut(300)
        $(this).find('.info').css({'filter':'blur(0)'})
    }).mouseout(function(){
        $('.cover').stop().fadeIn(200)
        $(this).find('.info').css({'filter':'blur(20px)'})
    })

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    document.querySelector(".contact_text").onmouseover = event => {
        let iterations = 0
        
        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
                .map((letter, index) => {
                    if(index < iterations){
                        return event.target.dataset.value[index]
                    }

                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("")
            
            if(iterations >= event.target.dataset.value.length){
                clearInterval(interval)
            }
    
            iterations += 1 / 2
        }, 30)
    }

    function copyToClipboard(val) {
        let copyText = document.createElement("textarea")
        document.body.appendChild(copyText)
        copyText.value = val
        copyText.select()
        document.execCommand('copy')
        document.body.removeChild(copyText)
    }

    gsap.from(".contact_text", 1.5, {
        scrollTrigger: {
            trigger: '.foot_wrap',
            start: 'top 80%',
        },
        yPercent: 160,
        ease: 'power2',
        opacity: 0,
    })

    gsap.from("#phonenumber", 1.5, {
        scrollTrigger: {
            trigger: '.foot_wrap',
            start: 'top 80%',
        },
        delay: 0.3,
        yPercent: 15,
        ease: 'power2',
        opacity: 0,
    })

    gsap.from("#email", 1.5, {
        scrollTrigger: {
            trigger: '.foot_wrap',
            start: 'top 80%',
        },
        delay: 0.6,
        yPercent: 25,
        ease: 'power2',
        opacity: 0,
    })
    
    const modal = $('.copy_modal')

    function modal_off(){
        modal.fadeOut(400)
    }

    function modal_on_phonenumber(){
        modal.fadeOut(0)
        clearTimeout(modal_off)

        $('.phonenumber_copy').stop().fadeIn(0, function(){
            setTimeout(modal_off, 1000)
        })
    }

    function modal_on_email(){
        modal.fadeOut(0)
        clearTimeout(modal_off)

        $('.email_copy').stop().fadeIn(0, function(){
            setTimeout(modal_off, 1000)
        })
    }

    $('#phonenumber').click(function(){
        copyToClipboard('+821034394906')

        modal_on_phonenumber()
    })

    $('#email').click(function(){
        copyToClipboard('2dongwk@gmail.com')

        modal_on_email()
    })

    $('footer button').mouseenter(function(){
        gsap.to(".foot_cursor", 0.2, {
            scale: 1,
            ease: 'expo.out'
        })
    }).mouseleave(function(){
        gsap.to(".foot_cursor", 0.2, {
            scale: 0,
            ease: 'expo.out'
        })
    })

    $('footer button').mousedown(function(){
        gsap.to(".foot_cursor", 0.2, {
            scale: 0.85,
            ease: 'expo.out'
        })
    }).mouseup(function(){
        gsap.to(".foot_cursor", 0.2, {
            scale: 1,
            ease: 'expo.out'
        })
    })

    $('footer button').mousemove(function(e){
        const cursorX = e.pageX - 100
        const cursorY = e.pageY - 30

        gsap.to(".foot_cursor", 0, {
            x: cursorX,
            y: cursorY
        })
    })

    //------------------ CodePen Code ------------------//
    const PI2 = 2 * Math.PI
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')
    const center = {x: 0, y: 0}
    let maxSize = 0
    const elements = []
    let elementsCount = 0
    const elementsPerCircle = 20
    let nextElement = 0
    const radius = 150
    let lastUpdate = Date.now()
    const updateTime = 200

    resize()
    window.addEventListener('resize', resize)
    window.requestAnimationFrame(animate)

    function populateOne () {
        createCircle(nextElement)
        nextElement++
        if (nextElement > elementsPerCircle) {
            nextElement = 0
        }
    }

    function createCircle (n) {
        const alpha = n * PI2 / elementsPerCircle
        const x = center.x + radius * Math.cos(alpha)
        const y = center.y + radius * Math.sin(alpha)
        const color = (n % 2 === 0) ? '#ebff00' : '#181818'

        elements.push(new Circle({x, y}, color))
        elementsCount++
    }

    function resize () {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        center.x = 0.69 * canvas.width
        center.y = 0.5 * canvas.height
        maxSize = 0.9 * canvas.width
    }

    function animate () {
        window.requestAnimationFrame(animate)

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        ctx.fillStyle = '#000000'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        let now = Date.now()
        let dt = now - lastUpdate
        if (dt >= updateTime) {
            populateOne()
            lastUpdate = now
        }

        for (let i = 0; i < elementsCount; i++) {
            const c = elements[i]

            c.grow()

            if (c.size > maxSize) {
            destroy(i)
            continue
            }

            ctx.beginPath()
            ctx.fillStyle = c.color
            ctx.arc(c.x, c.y, c.size, 0, PI2, false)
            ctx.fill()
        }
    }

    function destroy (i) {
        delete elements[i]
        elements.splice(i, 1)
        elementsCount--
    }

    class Circle {
        constructor (position, color) {
            this.color = color
            this.position = position
            this.scale = 0
            this.growSpeed = 0.1
        }

        get x () {
            return this.position.x
        }

        get y () {
            return this.position.y
        }

        get size () {
            return this.scale * 10
        }

        grow () {
            this.scale += this.growSpeed
        }
    }
    //------------------ CodePen Code ------------------//
    let carousel = document.querySelector('.carousel');
    let carouselPivot = carousel.querySelector('.carousel_pivot');

    let carouselRadius = 100;
    let carouselRotation = 65;
    let carouselTilt = 0;
    let carouselVelocity = 10;
    let carouselIsDragging = false;
    let carouselDragPosition;

    function start() {
        let items = carouselPivot.children;
        let arc = 540 / items.length;
        for(let i = 0; i<items.length; i++) {
            let item = items[i];
            item.style.transform = 'translate3d(-50%, -50%, 0) rotateY(' + (i * arc) + 'deg) translateZ(' + (carouselRadius * -18) + 'px)'
        }
    }

    function dragStart(position) {
        carouselIsDragging = true;
        carouselVelocity = 0;
        carouselDragPosition = position.x;
    }

    function dragMove(position) {
        carouselVelocity = Math.atan2(position.x - carouselDragPosition, carouselRadius * 2) * -75 / Math.PI;
        carouselDragPosition = position.x;
    }

    function dragEnd(position) {
        carouselIsDragging = false;
    }

    function update() {
        carouselRotation += carouselVelocity;
    
        if(!carouselIsDragging) {
            carouselVelocity *= 0.92;
        }
        
        carouselTilt += (carouselVelocity * 0.1 - carouselTilt) / 10;
        
        carouselPivot.style.transform = 'translateZ(-'+ carouselRadius * 2 +'px) rotateX(' + -carouselTilt + 'deg) rotateY(' + carouselRotation + 'deg) ';
    }

    (function(){
        let location = function(evt) {
        let t1 = evt.touches, t2 = evt.changedTouches;
        let s = (t1 && t1[0]) || (t2 && t2[0]) || evt;
        return {x:s.pageX, y:s.pageY};
    };
    
    let prevent = function(evt) {
        evt.preventDefault();
    };

    let handler = function(evt) {
        switch(evt.type) {
        case 'mousedown':
            add(document, ['mousemove', 'mouseup']);
        case 'mousedown':
        case 'touchstart':
            prevent(evt);
            dragStart(location(evt));
            break;
        case 'mousemove':
        case 'touchmove':
            dragMove(location(evt));        
            break;
        case 'mouseup':
            remove(document, ['mousemove', 'mouseup']);
        case 'mouseup':
        case 'touchend':
        case 'touchcancel':
            dragEnd(location(evt));
            break;
        }
    };
    let add = function(target, events) {
        for(let i = 0; i<events.length; i++) {
        target.addEventListener(events[i], handler);
        }
    };
    let remove = function(target, events) {
        for(let i = 0; i<events.length; i++) {
        target.removeEventListener(events[i], handler);
        }
    };
    
    add(carousel, ['mousedown', 'touchstart', 'touchmove', 'touchend', 'touchcancel']);
    carousel.ondragstart = function() { return false; };
    })();

    (function() {
        let timestamp = window.performance ? function(){return window.performance.now()/1000;} : function(){return new Date().getTime()/1000;};
        let requestFrame = window.requestAnimationFrame || function(callback) {setTimeout(callback, 16);};
        start();
        let time = timestamp();
        let enterFrame = function() {
            let now = timestamp();
            let delta = now - time;
            time = now;
            update(delta);
            requestFrame(enterFrame);
        };
        requestFrame(enterFrame);
    })();
    //------------------ CodePen Code ------------------//

    ScrollTrigger.matchMedia({
        "(min-width: 1025px)": function(){
            $('body').on('mousemove',function(e){
                const winWidth = $(window).width()
                const video = $('.intro_video').width()
                const videoCenter = video / 2
                const follow = (e.pageX * 0.6) + (winWidth * 0.2) - videoCenter
                
                gsap.to(".intro_video", 1, {
                    x: follow,
                    ease: 'power2'
                })
            })

            gsap.timeline({
                scrollTrigger: {
                    trigger: '.space_container',
                    start: 'top 90%',
                    end: 'top 50%',
                    scrub: 0.5,
                }
            }).fromTo(".intro_video", {
                'width': 'calc(30% + ((1920px - 100vw) / 10))',
                duration: 10,
                ease: 'none',
                'top': '0'
            }, {
                'width': 'calc(90% + ((1920px - 100vw) / 10))',
                duration: 10,
                ease: 'none',
                'top': '5%'
            },0)
        },

        "(max-width: 1024px)": function(){
            $('body').off('mousemove')

            gsap.to(".intro_video", 1, {
                x: 0,
                'top': '0',
                'left':'0',
                ease: 'expo.out'
            })
        },
    })
})

