import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsersListComponent } from './users-list/users-list.component';
import { DialogComponent } from './dialog/dialog.component';
import { fakeBackendProvider } from './helper/fake-backend';
import { JwtInterceptor } from './helper/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    UsersListComponent,
    DialogComponent,
  ],entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    fakeBackendProvider,
    [
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
