import { Component, OnInit } from '@angular/core';
import { Animal, AnimalData } from 'src/assets/animal-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  animalData: Animal[] = AnimalData;

  constructor() { }

  ngOnInit(): void {
  }

}
