import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //? i18nSelect
  public name: string = 'Manuel';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void {
    this.name = 'Emily';
    this.gender = 'female';
  }

  //? i18nPlural
  public clients: string[] = ['Manuel', 'Emily', 'Manuel Jesus', 'Claudia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    // '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient():void {
    this.clients.shift();
  }

  //? KeyValue Pipe
  public person = {
    name: 'Manuel',
    age: 20,
    address: 'Cancún, Q.Roo'
  }

  //? Async Pipe
  public myObservableTimer: Observable<number> = interval(2000)
    .pipe(
      tap(value => console.log('Tap:', value))
    );

  public promiseValue: Promise<string> = new Promise ( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
    }, 3500);
  })

}
