import { AnimationTriggerMetadata, trigger, state, style, transition, animate } from '@angular/animations';

export function expandColapse(h): AnimationTriggerMetadata {
    return trigger('expandColapse',
        [
            state('expand',
                style(
                    {
                        ...h,
                        position: 'fixed',
                        top: '0',
                        width: '100%',

                    },



                ),
                {
                    params: {
                        height: '2'
                    }
                }


            ),
            state('colapse',
                style({
                    height: '100px',
                    backgroundColor: 'white',
                    // borderStyle: 'solid',
                    position: 'fixed',
                    top: '0',
                    // padding: '50px',
                    width: '100%',
                    // color: '#34043C'
                    color: '#50A0CA'




                })
            ),
            transition('expand => colapse', [animate("1s ease-in")]),
            transition('colapse => expand', [animate('1s ease-out')])


        ]
    )


}