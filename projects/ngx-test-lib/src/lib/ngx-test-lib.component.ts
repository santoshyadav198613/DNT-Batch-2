import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-ngx-test-lib',
  template: `
    <p>
      Hello {{name}}
    </p>
  `,
  styles: []
})
export class NgxTestLibComponent implements OnInit {

  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
