import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComponentsBasics } from './components/components-basics/components-basics.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true, // a partir da versão 17, indica que é um componente base do projeto
  imports: [CommonModule, RouterOutlet, ComponentsBasics, TemplateBindingComponent], // local onde sera importado os componentes e diretivas
  template: `
    <router-outlet></router-outlet>
    <h1>ANGULAR BASICS</h1>
    <app-components-basics />
    <app-template-binding />
  `,
})
export class AppComponent {
  title = 'angular-basics';
}
