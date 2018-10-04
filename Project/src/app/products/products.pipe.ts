import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'products'
})
export class ProductsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args ? 
    value.filter((item,index) => {
      if(item.productName.toLowerCase().indexOf(args.toLowerCase()) !=-1){
        return true;
      }
      
    })
    :
    value;
  }

}

// for filter we have to create product.pipe.ts using command refer written 
//notes and add the if statement command