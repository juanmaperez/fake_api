import { Component, OnInit } from '@angular/core';
import { ConditionsService } from './services/conditions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Conditions';
  term;
  conditions: any[];

  constructor(private conditionsApi: ConditionsService) { }

  ngOnInit() {
    this.conditionsApi.getAllConditions().subscribe( conditions => {
      this.conditions = conditions;
    });
  }

  search(input) {
    if (input.length > 0) {
      this.conditionsApi.getFilteredConditions(input)
      .subscribe(conditions => {
        this.conditions = conditions;
      });
    } else {
      this.conditions = this.conditionsApi.conditions;
    }
  }




}

