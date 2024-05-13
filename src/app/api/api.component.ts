
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {

}
