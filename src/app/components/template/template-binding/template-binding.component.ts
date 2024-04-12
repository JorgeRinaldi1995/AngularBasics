import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Wolverine Rastafari';
  public lightersHeStolen = 0;
  public howMany = this.lightersHeStolen < 1 ? 'Santo e ilibado' : 'Slc rato kkkk devolve meus bic';
  public isDisabled = this.lightersHeStolen === 0 ? true : false;
  public imgSrc = 'https://scontent.fsjp3-1.fna.fbcdn.net/v/t39.30808-6/308988886_440149911546728_8231162373279455997_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=t1H_tnIvJjUAb7jNdVS&_nc_ht=scontent.fsjp3-1.fna&oh=00_AfCUOSd73ZWA5V4TjFfpLV0E5UtNHZD1XaYwed9At0kKNQ&oe=661F50D7'

  

  public howManyJointsTheySmoke(joints: number, smokesPerDay: number) {
    return joints * smokesPerDay;
  }
}
