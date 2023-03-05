import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FwAltinComponent } from './fw-altin/fw-altin.component';
import { FwDovizComponent } from './fw-doviz/fw-doviz.component';
import { IkoComponent } from './iko/iko.component';
import { FwRowComponent } from './fw-row/fw-row.component';
import { LoadingComponent } from './loading/loading.component';
import { AlisPipe } from './alis.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SrbComponent } from './srb/srb.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    FwAltinComponent,
    FwDovizComponent,
    IkoComponent,
    FwRowComponent,
    LoadingComponent,
    AlisPipe,
    SrbComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
