import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'manuel alejandro pasos cupul';
  public nameUpper: string = 'MANUEL ALEJANDRO PASOS CUPUL';
  public fullName: string = 'maNuEl AleJANdrO paSoS cUPul';

  public customDate: Date = new Date();
}
