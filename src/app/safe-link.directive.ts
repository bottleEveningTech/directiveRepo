import { Directive } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    }
})
export class SafeLinkDirective{
    constructor(){
        console.log('Safe link directive is active');
    }

    onConfirmLeavePage(event: MouseEvent){
        const hasConfirmed = window.confirm('Do you want to leave the app');

        if(hasConfirmed){
            return;
        }

        event.preventDefault();
    }
}