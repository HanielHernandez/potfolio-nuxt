import gsap from 'gsap'

export default {
  onEnter: (el: HTMLElement|Element, done: () => void) => {
    const tl = gsap.timeline({
      onComplete: done
    })
    tl.from(
      "#my_projects_title",
      {
        opacity: 0,
        duration: 0.5,
        ease: 'power3.easeInOut'
      },
      0
    )
    tl.from(
      el.getElementsByClassName('card'),
      {
        opacity: 0,
        y: -30,
        duration: 1,
        stagger: 0.1,
        ease: 'back.inOut(1.7)'
      },
      0.1
    )
    tl.from(
      "#title",
      {
        opacity: 0,
        duration: 0.5,
        ease: 'power3.easeInOut'
      },
      0
    )

    tl.from(
      el.getElementsByClassName('experience-row'),
      {
        opacity: 0,
        x: 30,
        duration: 1,
        stagger: 0.1,
        ease: 'back.inOut(1.7)'
      },
      0.2
    )


    tl.play()
  },
  onLeave: (el: HTMLElement|Element, done: () => void) => {
    const tl = gsap.timeline({
      onComplete: done
    })
    tl.to(
      '#title',
      {
        opacity: 0,
        duration: 0.5,
        ease: 'power3.easeInOut'
      },
      0
    )
    tl.to(
      el.getElementsByClassName('card'),
      {
        opacity: 0,
        y: -30,
        duration: 1,
        stagger: 0.1,
        ease: 'back.inOut(1.7)'
      },
      0.1
    )

    tl.to(
      '#my_projects_title',
      {
        opacity: 0,
        duration: 0.5,
        ease: 'power3.easeInOut'
      },
      0.2
    )
    tl.to(
      el.getElementsByClassName('experience-row'),
      {
        opacity: 0,
        x: 300,
        duration: 0.3,
        stagger: 0.1
      },
      0.3
    )


    tl.play()

    tl.play()
  }
}
