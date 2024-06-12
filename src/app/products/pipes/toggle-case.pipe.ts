import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'toggleCase'
})

// manuel | toggleCase = 'MANUEL'
// MANUEL | toggleCase = 'manuel'

export class ToggleCasePipe implements PipeTransform{

  transform(value: string, toUpper: boolean = false): string {

    // console.log({value, toUpper});

    return (toUpper) ? value.toUpperCase() : value.toLowerCase();
  }
}
