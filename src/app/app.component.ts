import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

import { STATES } from './constants/STATES';

import {Observable} from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isPasswordHidden = true

  brazilianStates = STATES
  brazilianStatesFiltered!: Observable<string[]>;
  birthState = new FormControl('')

  isLoading = false

  ngOnInit() {
    this.brazilianStatesFiltered = this.birthState.valueChanges.pipe(
      startWith(''),
      map(newBirthState => this.brazilianStates.filter(
        state => state.toLowerCase().includes((newBirthState?.toLocaleLowerCase() || ''))
      )),
    );
  }

  registerPerson() {
    this.isLoading = true

    setTimeout(() => {
      this.isLoading = false
    }, 7000)
  }

}
