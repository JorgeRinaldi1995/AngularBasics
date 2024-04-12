import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-styles',
  standalone: true,
  imports: [],
  templateUrl: './angular-styles.component.html',
  styleUrls: [
      './angular-styles-a.component.scss', 
      './angular-styles-b.component.scss'
    ], // através de styleUrls eu posso importar mais de um caminho css
/*   styles: [`
    h3{
      color: red;
    }
  `],  */// tambem é possivel colocar o estilo direto no componente TS
})
export class AngularStylesComponent {

}
