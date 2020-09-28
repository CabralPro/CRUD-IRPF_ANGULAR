import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Irpf } from './irpf.model';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError } from "rxjs/operators";
import { EMPTY } from 'rxjs/internal/observable/empty';
import { BASE_URL } from 'app/constant';

@Injectable({
  providedIn: 'root'
})

export class IrpfService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  baseUrl = `${BASE_URL}/irpf`;

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(irpf: Irpf): Promise<Irpf> {
    return this.http.post<Irpf>(this.baseUrl, irpf).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    ).toPromise();
  }

  read(): Promise<Irpf[]> {
    return this.http.get<Irpf[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    ).toPromise();
  }

  update(irpf: Irpf): Promise<Irpf> {
    const url = `${this.baseUrl}`;
    return this.http.put<Irpf>(url, irpf).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    ).toPromise();
  }

  delete(id: number): Promise<Irpf> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Irpf>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    ).toPromise();
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage(e.resp ?? "Ocorreu um erro!", true);
    return EMPTY;
  }
}
