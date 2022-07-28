import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  toggle = new BehaviorSubject<boolean>(false);
}
