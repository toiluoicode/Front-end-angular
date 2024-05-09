import { Component } from '@angular/core';
import { HeaderComponent } from './../header/header.component';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css'
})
export class DataListComponent {

}
