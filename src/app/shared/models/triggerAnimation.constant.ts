import {AnimationTriggerMetadata, trigger, state, style, transition, animate} from '@angular/animations';

export const collapseAnimation: AnimationTriggerMetadata = trigger('collapse', [
  state(
    'void',
    style({
      height: 0,
      overflow: 'hidden',
      'padding-top': 0,
      'padding-bottom': 0
    })
  ),
  state(
    '*',
    style({
      height: '*',
      overflow: 'hidden',
      'padding-top': '*',
      'padding-bottom': '*'
    })
  ),
  transition('* => void', animate('150ms ease-out')),
  transition('void => *', animate('150ms ease-in'))
]);

export const alertAnimation: AnimationTriggerMetadata = trigger('showAlert', [
  state(
    'void',
    style({
      transform: 'translateX(150%)'
    })
  ),
  state('*', style({})),
  transition('* => void', animate('500ms ease-out')),
  transition('void => *', animate('150ms ease-in'))
]);
