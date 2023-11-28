import { Directive, Input, ElementRef, Renderer2, OnChanges } from '@angular/core';

@Directive({
    selector: '[appCurrencyFormatter]'
})
export class CurrencyFormatterDirective implements OnChanges {
    @Input() amount: number | undefined = 0;
    @Input() currencyCode: string = 'USD';

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnChanges() {
        const formattedValue = this.formatCurrency(this.amount, this.currencyCode);
        this.renderer.setProperty(this.el.nativeElement, 'innerText', formattedValue);
    }

    private formatCurrency(value: number | undefined, currencyCode: string): string {
        let formattedString = '';

        switch (currencyCode) {
            case 'USD':
                formattedString = '$' + value?.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
                break;
            case 'EUR':
                formattedString = '€' + value?.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
                break;
            case 'REAL':
                formattedString = 'R$' + value?.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
                break;
            default:
                formattedString = '$' + value?.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
                break;
        }

        return formattedString;
    }
}
