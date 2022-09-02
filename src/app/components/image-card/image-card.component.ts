import { Component, Input, OnInit } from '@angular/core';
import { Animal } from 'src/assets/animal-data';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {

  @Input() data!: Animal
  

  constructor() { }

  ngOnInit(): void {
  }

}
