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
            const address = (event.target as HTMLAnchorElement).href;
            (event.target as HTMLAnchorElement).href = address + '?from = myapp';

            return;
        }

        event.preventDefault();
    }
}