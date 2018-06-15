import { Component, OnInit } from '@angular/core';
import { RealDataService } from '../real-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(public realdataService: RealDataService) { }
  ngOnInit() {
  }

}
