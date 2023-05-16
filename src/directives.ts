import { Directive } from 'vue'
import { gsap } from 'gsap'
import { Binding, ScrollTriggerVars, TweenVars } from './types'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// usage 1: v-gsap:from="{ opacity: 0, y: 100 }"
// usage 2: v-gsap:to="{ opacity: 0, y: 100 }"
// usage 3: v-gsap:effect.smooth
export const vGsap: Directive<HTMLElement, TweenVars> = {
  mounted(el, b) {
    const binding = b as Binding

    if (binding.arg === 'from') {
      gsap.from(el, binding.value)
    }
    if (binding.arg === 'to') {
      gsap.to(el, binding.value)
    }
    if (binding.arg === 'effect' || !binding.arg) {
      Object.keys(binding.modifiers).forEach((effect) => {
        if (!gsap.effects[effect])
          throw new Error(
            `GSAP effect ${effect} does not exist. Have you registered it?`,
          )

        gsap.effects[effect](el, binding.value)
      })
    }
  },
}

// usage: v-scroll-trigger="{ start: 'top bottom', end: '+=400px', toggleClass: 'active'}"
export const vScrollTrigger: Directive<HTMLElement, ScrollTriggerVars> = {
  mounted(el, binding) {
    ScrollTrigger.create({
      trigger: el,
      ...binding.value,
    })
  },
}

// usage: v-gsap-pinned="{ end: '+=400px' }"
export const vGsapPinned: Directive<HTMLElement, ScrollTriggerVars> = {
  mounted(el, binding) {
    ScrollTrigger.create({
      trigger: el,
      pin: true,
      start: 'top top',
      ...binding.value,
    })
  },
}
