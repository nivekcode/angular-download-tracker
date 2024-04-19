import 'zone.js';

import { bootstrapApplication } from '@angular/platform-browser';

// @ts-ignore
import App from './app/app.component.analog';
import { appConfig } from './app/app.config';

bootstrapApplication(App, appConfig);
