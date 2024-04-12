import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportingComponentsComponent } from '../importing-components/importing-components.component';
import { AngularStylesComponent } from '../angular-styles/angular-styles.component';

@Component({
  selector: 'app-components-basics', // um componente é importado em outro utilizando essa nomenclatura. ex: <app-components-basics></app-components-basics>
  standalone: true,
  imports: [ImportingComponentsComponent, AngularStylesComponent, CommonModule], // é necessario importar a classe do componente em importas, não confundir com o seletor
  templateUrl: './components-basics.component.html',
  styleUrl: './components-basics.component.scss'
})
export class ComponentsBasics {

}
