import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
  animateChild,
  keyframes,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('isLeft <=> isRight', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('600ms ease-out', style({ left: '-100%' }))]),
      query(':enter', [animate('600ms ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
]);
