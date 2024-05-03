import { HeaderComponent } from './../header/header.component';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-samplepage',
  standalone: true,
  imports: [RouterLink,RouterOutlet,HeaderComponent],
  templateUrl: './samplepage.component.html',
  styleUrl: './samplepage.component.css'
})
export class SamplepageComponent {

}
