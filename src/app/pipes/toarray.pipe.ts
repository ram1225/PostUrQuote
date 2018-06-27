import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toarray'
})
export class ToarrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let keys = [];
    for(let key in value){
            keys.push({key: key,name: value[key].name, email: value[key].email});
    }
    keys.splice(-1,1);  
    return keys;
  }

}



/* referred https://stackoverflow.com/questions/35647365/how-to-display-json-object-using-ngfor */