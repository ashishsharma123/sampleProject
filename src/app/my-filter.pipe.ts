import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  
 transform(items: any[], args: any[]): any {
        console.log("args[0] "+args[0]);
        if(!args[0] || args[0] == '')
          return items;
        return items.filter((item) => item._fullName.toLowerCase().indexOf(args[0].toLowerCase()) > -1);
    
 }

}
