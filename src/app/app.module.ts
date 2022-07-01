import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UnitBoardComponent } from './unit-board/unit-board.component';
import { UnitDetailComponent } from './unit-detail/unit-detail.component';
import { SigningViewComponent } from './signing-view/signing-view.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import { FullCalendarModule } from '@fullcalendar/angular';
import { StudentListItemComponent } from './unit-detail/student-list-item/student-list-item.component';
import { QrCodeViewComponent } from './qr-code-view/qr-code-view.component';

import { StoreModule } from '@ngrx/store';
import { authReducer } from '../shared/store/reducers/auth.reducer';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UnitBoardComponent,
    UnitDetailComponent,
    SigningViewComponent,
    StudentListItemComponent,
    QrCodeViewComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    CardModule,
    ToastModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ isLog: authReducer }, {}),
    TabViewModule,
    CalendarModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
