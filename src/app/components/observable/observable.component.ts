import {Component, OnDestroy, OnInit} from '@angular/core';
import {NumberService} from "../../services/number.service";
import {AsyncSubject, BehaviorSubject, ReplaySubject, Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  number?: number;
  disabled = false;
  subscription?: Subscription

  constructor(private numberService: NumberService) { }

  ngOnInit(): void {
  }

  start(): void {
    this.disabled = true;
    this.number = undefined;
    // observable
    this.subscription = this.numberService.getNumbers().subscribe({
      next: value => {
        console.log(value);
        this.number = value;
      },
      complete: () => {
        this.disabled = false
      }
    })
  }

  subject(): void {
    const subject = new Subject<string>();
    subject.next('1er valeur');

    subject.subscribe({
      next: value => { console.log(`Subject: ${value}`) },
      complete: () => { console.log('Subject: fini') }
    });

    subject.next('2e valeur');
    subject.next('3e valeur');
    subject.complete();
  }

  behaviorSubject(): void {
    const subject = new BehaviorSubject<string>('Valeur initiale');
    subject.next('1er valeur');

    subject.subscribe({
      next: value => { console.log(`BehaviorSubject: ${value}`) },
      complete: () => { console.log('BehaviorSubject: fini') }
    });

    subject.next('2e valeur');
    subject.next('3e valeur');
    subject.complete();
  }

  replaySubject(): void {
    const subject = new ReplaySubject<string>(2);
    subject.next('1er valeur');
    subject.next('2e valeur');
    subject.next('3e valeur');

    subject.subscribe({
      next: value => { console.log(`ReplaySubject: ${value}`) },
      complete: () => { console.log('ReplaySubject: fini') }
    });

    subject.next('4e valeur');
    subject.next('5e valeur');
    subject.complete();
  }

  asyncSubject(): void {
    const subject = new AsyncSubject<string>();

    subject.subscribe({
      next: value => { console.log(`AsyncSubject 1er abonnement: ${value}`) },
    });
    subject.next('1er valeur');

    subject.subscribe({
      next: value => { console.log(`AsyncSubject 2e abonnement: ${value}`) },
    });
    subject.next('2e valeur');
    subject.complete();

  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.numberService.clear();
  }
}
