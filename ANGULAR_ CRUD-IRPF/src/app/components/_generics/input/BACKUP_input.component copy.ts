// import { Component, Input, OnInit, forwardRef } from '@angular/core';
// import { FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

// export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
//     provide: NG_VALUE_ACCESSOR,
//     useExisting: forwardRef(() => InputComponent),
//     multi: true
// };

// @Component({
//     selector: 'app-input',
//     templateUrl: './input.component.html',
//     styleUrls: ['./input.component.css'],
//     providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
// })

// export class InputComponent implements OnInit {
//     @Input() placeholder: number;
//     @Input() required: boolean = true;
//     @Input() type: string = 'text';

//     validation = new FormControl('', [Validators.required]);
//     // validation = new FormControl('', [Validators.required, Validators.email]);

//     getErrorMessage() {
//         if (this.validation.hasError('required')) {
//             return 'Campo obrigatório';
//         }
//         // return this.validation.hasError('email') ? 'Not a valid email' : '';
//     }


//     constructor() { }

//     ngOnInit(): void {
//     }

//     private innerValue: any = '';
//     private onTouchedCallback: () => void = (() => { });
//     private onChangeCallback: (_: any) => void = () => { };

//     get value(): any {
//         return this.innerValue;
//     };

//     set value(v: any) {
//         if (v !== this.innerValue) {
//             this.innerValue = v;
//             this.onChangeCallback(v);
//         }
//     }

//     onBlur() {
//         this.onTouchedCallback();
//     }

//     writeValue(value: any) {
//         if (value !== this.innerValue) {
//             this.innerValue = value;
//         }
//     }
//     registerOnChange(fn: any) {
//         this.onChangeCallback = fn;
//     }
//     registerOnTouched(fn: any) {
//         this.onTouchedCallback = fn;
//     }
// }
