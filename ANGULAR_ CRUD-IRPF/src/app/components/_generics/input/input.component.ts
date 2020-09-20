import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormComponent } from '../form/form.component';
import { CurrencyMaskConfig } from 'ng2-currency-mask';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {
  @Input() placeholder: string;
  @Input() max: number;
  @Input() min: number;
  @Input() required: boolean = true;
  @Input() type: string = 'text';
  @Input() name: string;

  customCurrencyMaskConfig: CurrencyMaskConfig = {
    align: "left",
    allowNegative: false,
    decimal: ",",
    precision: 2,
    prefix: "R$ ",
    suffix: "",
    thousands: "."
  };

  formControl = new FormControl;
  parentForm = new FormComponent;

  constructor(parent: FormComponent) {
    this.parentForm = parent;
  }

  ngOnInit(): void {
    this.formControl = this.parentForm.formGroup.controls[this.name] as FormControl;
  }

  getErrorMessage() {
    if (this.formControl.hasError('required'))
      return 'Campo obrigatório';

    if (this.formControl.hasError('email'))
      return 'Email inválido';

    if (this.formControl.hasError('pattern'))
      return 'Numero inválido'

  }
}
