import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  @Input() element: {type: string, name: string, content: string};

  constructor() {
    console.log('Constructor was called!')
  }

  ngOnInit() {
    console.log('ngOnInit was called!')
  }
}
