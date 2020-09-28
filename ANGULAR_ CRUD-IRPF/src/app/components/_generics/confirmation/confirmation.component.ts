import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  @Input() callback: Function;
  loading: Boolean = false;

  constructor(private dialogRef: MatDialog) { }

  ngOnInit(): void { }

  async executeCallback() {
    this.loading = true;
    await this.callback();
    this.dialogRef.closeAll()
    this.loading = false;
  }
}
