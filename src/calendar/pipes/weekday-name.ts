import {Pipe} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'weekdayName'
})
export class weekdayName {
  transform(value, args) {
    var lang = moment.localeData('en').weekdaysShort()[value];
    return lang;
  }
}
