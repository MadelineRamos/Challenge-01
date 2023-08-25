import { Pipe, PipeTransform } from '@angular/core';
import { CustomerService } from './customer.service';

@Pipe({
  name: 'sortByTotal'
})
export class SortByTotalPipe implements PipeTransform {

  transform(input: CustomerService[]): CustomerService[] {
    let output: CustomerService[] = input.sort(
      (a: CustomerService, b: CustomerService) => {
        return b.purchase_total - a.purchase_total
      }
    )
    return output;
  }
}
