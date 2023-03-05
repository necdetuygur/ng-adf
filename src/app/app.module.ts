import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FwAltinComponent } from './fw-altin/fw-altin.component';
import { FwDovizComponent } from './fw-doviz/fw-doviz.component';
import { IkoComponent } from './iko/iko.component';
import { FwRowComponent } from './fw-row/fw-row.component';
import { LoadingComponent } from './loading/loading.component';
import { AlisPipe } from './alis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FwAltinComponent,
    FwDovizComponent,
    IkoComponent,
    FwRowComponent,
    LoadingComponent,
    AlisPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
