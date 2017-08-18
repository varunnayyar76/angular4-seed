// Core modules
import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';

// Components
import { AppComponent }     from './app/app.component';
import { HomeComponent }    from './home/home.component';
import { LoginComponent }   from './login/login.component';

// Services
import { HomeService }      from './home/home.service';

// Routing Modules
import { AppRoutingModule } from './routing/app-routing.module';
import { HomeDetailsComponent } from './home-details/home-details.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    AppComponent,
    HomeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }