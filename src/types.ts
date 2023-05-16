import { DirectiveBinding } from 'vue'

export type ScrollTriggerVars = Parameters<typeof ScrollTrigger.create>['0']

type Args = 'from' | 'to' | 'effect'

export type Binding = DirectiveBinding<TweenVars> & {
  arg?: Args
}

export type GsapEffect = {
  name: string // name of the effect (e.g. 'smooth')
  effect: (targets: any, vars: TweenVars) => gsap.core.Tween
  defaults?: TweenVars
  extendTimeline?: boolean
}
export type TweenVars = Parameters<typeof gsap.to>['2']
