import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  purchase_total: number = 0;

  constructor(private http: HttpClient) { }

  getCustomers():Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:4200/assets/customer.json`)
  }

  getBySalesperson(username: string): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:4200/assets/customer.json`)
    .pipe(
      map(customers => customers.filter(customer=> {
        if(username === customer.salesperson){
          this.purchase_total = this.purchase_total + customer.purchase_total;
          return true
        } else return false
      })
      .sort((a: CustomerService, b: CustomerService) => {
        return b.purchase_total - a.purchase_total
      })
      )
    )
  }

}
