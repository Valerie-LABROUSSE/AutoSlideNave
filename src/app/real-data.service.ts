import { Injectable } from '@angular/core';
import REAL_DATA from './real-data';

@Injectable({
  providedIn: 'root'
})
export class RealDataService {

constructor() {
  this.selectedReal = REAL_DATA.reals;
}

selectedReal ;

}
