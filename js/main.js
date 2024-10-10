$(document).ready(function(){
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(".intro h2", 1.5, {
        delay: 0.8,
        rotateX: 90,
        ease: 'expo.out',
        stagger: 0.1
    })

    gsap.from(".intro_text p, .intro_text span", 0.8, {
        delay: 2.7,
        yPercent: 100,
        opacity: 0,
        ease: 'expo.out'
    })

    gsap.from("header", 0.8, {
        delay: 2.7,
        opacity: 0,
        display: 'none'
    })

    gsap.from(".intro_video", 1, {
        delay: 2.6,
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
        $(this).find('.info').css({'filter':'none'})
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
                    scrub: 0.5
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

        "(min-width: 769px)": function(){
            gsap.to(".about_text h3", 0.2, { opacity: 0.2 })
            gsap.to(".skill h3", 0.2, { opacity: 1 })
            $('.about_detail_wrap').stop().fadeOut(100)
            $('.skill .about_detail_wrap').stop().fadeIn(200)
            $('.skill .about_detail').addClass('on')

            $('.about_text h3').on('mouseover',function(){
                if($(this).siblings('div').hasClass('on')){
                    return
                }else{
                    $('.on').removeClass('on')
                    $(this).siblings('div').addClass('on')
            
                    $('.about_detail_wrap').stop().fadeOut(100)
                    $('.on>.about_detail_wrap').stop().fadeIn(200)
        
                    gsap.to(".about_text h3", 0.2, { opacity: 0.2 })
                    gsap.to(this, 0.2, { opacity: 1 })
                    gsap.from(".on>.about_detail_wrap", 0.4, { scale: 0.9 })
                }
            })
        },

        "(max-width: 768px)": function(){
            $('.about_text h3').off('mouseover')
            .siblings('div').removeClass('on')
            .find('.about_detail_wrap').stop().fadeIn(200)

            gsap.to(".about_text h3", { opacity: 1 })
            gsap.to(".education .about_detail_wrap", {
                'display': 'flex',
                'justify-content': 'space-between'
            })
        }
    })
})

