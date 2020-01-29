import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { Observable, Subject, interval } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestory {

  constructor(private appareilService: AppareilService) {
  }

  escondes: number;
  counterSubscription: Subscription;

  ngOnInit(){
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

  ngOnDestory() {
    this.counterSubscription.unsubscribe();
  }

}
