import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-test';
  content: any;
  restList: string[];


  constructor()
  {
    this.restList = ["Longhorn","Kyoto","Davio's","Cafe Assisi","Cibo Matto","Trattoria Della Nonna","Sabatino's","Trattoria Romana","Fresh Catch","Canova"];
  }
  
  ngOnInit(): void {
    this.content = document.getElementById("body");
    
  }
;

  public GenerateRandom(): void {
    var randIndex = Math.floor(Math.random() * this.restList.length);
    console.log(randIndex);
    console.log(this.restList[randIndex]);
    this.content.textContent = this.restList[randIndex];
  }

}
