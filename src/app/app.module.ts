import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { IconsProviderModule } from './icons-provider.module';
import {DateHelperService, NgZorroAntdModule, NZ_DATE_CONFIG, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    CalendarViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_DATE_CONFIG, useValue: {
      firstDayOfWeek: 0
    }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
