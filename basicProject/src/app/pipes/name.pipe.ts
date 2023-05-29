import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value?: string): any {
    if(value!=undefined)
      return value.charAt(0).toUpperCase()+value.substring(1);
    return null;
  }

}
