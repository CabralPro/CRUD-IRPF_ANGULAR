import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  loading: Boolean = false;

  constructor() { }

  ngOnInit(): void { }

  async submit() {
    if (!this.formGroup.valid) return;
    this.loading = true
    const resp = await this.callback();
    // if(resp) this.formGroup.res;
    // console.log('resp :>> ', resp);
    this.loading = false;
  }

}
