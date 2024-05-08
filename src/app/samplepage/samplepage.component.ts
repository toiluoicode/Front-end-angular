import { CommonModule } from '@angular/common';
import { HeaderComponent } from './../header/header.component';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-samplepage',
  standalone: true,
  imports: [RouterLink,RouterOutlet,HeaderComponent,CommonModule],
  templateUrl: './samplepage.component.html',
  styleUrl: './samplepage.component.css'
})
export class SamplepageComponent {
  submenuVisible1: boolean = false;
  submenuVisible2: boolean = false;

  toggleSubMenu1() {
    this.submenuVisible1 = !this.submenuVisible1;
  }
  toggleSubMenu2() {
    this.submenuVisible2 = !this.submenuVisible2;
  }
}
