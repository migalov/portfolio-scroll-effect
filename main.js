import './src/styles/style.scss'

let itemsLeft = gsap.utils.toArray('.gallery__left .gallery__item'),
    itemsRight = gsap.utils.toArray('.gallery__right .gallery__item')

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true
  })

  gsap.fromTo('.hero-section',
    {
      opacity: 1
    },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'center',
        end: '800',
        scrub: true
    }
  })

  itemsLeft.forEach(item => {
    gsap.fromTo(item,
      {
        x: -500,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: item,
          start: '-850',
				  end: '-100',
          scrub: true
        }
      }
    )
  })

  itemsRight.forEach(item => {
    gsap.fromTo(item,
      {
        opacity: 0,
        x: 500
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: '0',
          end: 'top',
          scrub: true
			  }
		  }
    )
  })
}

