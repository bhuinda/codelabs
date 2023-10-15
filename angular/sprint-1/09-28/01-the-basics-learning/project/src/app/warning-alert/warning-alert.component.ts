import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <p>This is a warning, you are in danger!</p>
  `,
  styles: [`
    p {
      color: red;
    }
  `]
})
export class WarningAlertComponent {

}
