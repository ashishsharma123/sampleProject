import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

 transform(items: any[], args: any[]): any {
        if(!args[0] || args[0] == '')
          return items;
        return items.filter(item => item._fullName.indexOf(args[0]) == 0);
    
 }

}
