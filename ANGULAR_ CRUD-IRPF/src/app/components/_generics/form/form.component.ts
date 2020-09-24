import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() callback: Function;

  initFormState: FormGroup;

  loading: Boolean = false;

  constructor() {
  }

  ngOnInit(): void { }

  async submit() {
    if (!this.formGroup.valid) return;
    this.loading = true
    const resp = await this.callback();
    if (resp) {
      this.formGroup.reset();
      Object.keys(this.formGroup.controls).forEach(key => {
        this.formGroup.get(key).setErrors(null);
      });
      setTimeout(() => location.reload(), 1500)
    }
    this.loading = false;
  }

}
