import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivesample',
  templateUrl: './directivesample.component.html',
  styleUrls: ['./directivesample.component.css']
})
export class DirectivesampleComponent implements OnInit {

  showSecret = false;

  constructor() { }

  ngOnInit() {
  }

}