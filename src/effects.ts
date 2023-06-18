import { GsapEffect } from './types'

import { gsap } from 'gsap'
import CustomEase from 'gsap/CustomEase'

export default <GsapEffect[]>[
  {
    name: 'smooth',
    effect: (targets: any) => {
      return gsap.to(targets, {
        y: 0,
        opacity: 1,
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: targets,
          start: 'top bottom',
          end: '+=400px',
          scrub: 0.3,
        },
      })
    },
  },

  {
    name: 'smooth2',
    effect: (targets: any) =>
      gsap.to(targets, {
        y: 0,
        x: 0,
        opacity: 1,
        scale: 1,
        ease: CustomEase.create(
          'custom',
          'M0,0 C0.02,0.118 0.048,0.2 0.388,0.38 0.618,0.501 0.972,0.694 1,1 ',
        ),
        scrollTrigger: {
          trigger: targets,
          start: 'center 60%',
          end: '+=20px',
          scrub: 0.3,
        },
      }),
  },
]
