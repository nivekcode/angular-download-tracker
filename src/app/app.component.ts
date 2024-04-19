import {ChangeDetectionStrategy, Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <router-outlet/>`,
  imports: [
    RouterOutlet
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
