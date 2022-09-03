import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent implements OnInit {
  data: string = '';

  constructor(private service: DataService) {}

  ngOnInit(): void {}

  getData() {
    this.service.getData().subscribe((res) => (this.data = res.texto));
  }
}
