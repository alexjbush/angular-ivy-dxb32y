import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'preloading';

  content: string = '';

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService
      .getContents('./assets/file.txt')
      .subscribe((c) => (this.content = c));
  }
}
