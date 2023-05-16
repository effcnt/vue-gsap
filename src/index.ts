import { Plugin } from 'vue'
import { vGsap, vGsapPinned, vScrollTrigger } from './directives'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CustomEase from 'gsap/CustomEase'
import { GsapEffect } from './types'

export type { ScrollTriggerVars, GsapEffect, TweenVars } from './types'
export * from './directives'
export * from './utils'

// pass in any custom GSAP effects you want to register
const install: Plugin<GsapEffect[]> = (app, ...effects) => {
  gsap.registerPlugin(CustomEase)
  gsap.registerPlugin(ScrollTrigger)

  effects.forEach((effect) => {
    gsap.registerEffect(effect)
  })

  app.directive('gsap', vGsap)
  app.directive('gsap-pinned', vGsapPinned)
  app.directive('scroll-trigger', vScrollTrigger)
}

export default { install }
