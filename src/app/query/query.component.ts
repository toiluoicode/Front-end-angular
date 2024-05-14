import bootstrap from '../../main.server';
import { HeaderComponent } from './../header/header.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-query',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './query.component.html',
  styleUrl: './query.component.css'
})
export class QueryComponent {

}
