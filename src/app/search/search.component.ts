import { Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() typing = new EventEmitter<string>();
  @Input() value = '';
  debouce: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit() {
    this.debouce
      .pipe(debounceTime(300))
      .subscribe(filter => {
        this.typing.emit(filter);
        console.log(filter);
      });
  }

  ngOnDestroy() {
    this.debouce.unsubscribe();
  }

}
