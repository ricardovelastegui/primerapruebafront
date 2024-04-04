import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
    const resultrecl=[];
    for(const recluso of value){
      if(recluso.nombre.indexOf(arg) > -1){
        resultrecl.push(recluso);
      };
    };

    return resultrecl;

  }

}
