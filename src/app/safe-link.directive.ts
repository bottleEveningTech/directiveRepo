import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    }
})
//this is a custom attribute directive
export class SafeLinkDirective{
    queryParam = input('myapp', {alias: 'appSafeLink'}); //default fallback is myapp
    //this variable can also be named as appSafeLink, no problem in that to give input like appSafeLink = "something"


    private hostEleRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
    constructor(){
        console.log('Safe link directive is active');
    }

    onConfirmLeavePage(event: MouseEvent){
        const hasConfirmed = window.confirm('Do you want to leave the app');

        if(hasConfirmed){
            // const address = (event.target as HTMLAnchorElement).href;
            // (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
            const address = this.hostEleRef.nativeElement.href;
            this.hostEleRef.nativeElement.href = address + '?from=' + this.queryParam();

            return;
        }

        event.preventDefault();
    }
}