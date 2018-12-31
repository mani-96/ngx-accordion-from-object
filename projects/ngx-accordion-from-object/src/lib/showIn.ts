import { trigger, state, style, animate, transition} from '@angular/animations';

export let showInn = trigger('showIn', [
    state('void', style({height: 0})),
    state('*', style({height: '*'})),
    transition('* <=> void', [
      animate('200ms cubic-bezier(0.86, 0, 0.07, 1)')
    ])
  ])