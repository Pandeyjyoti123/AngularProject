import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { RegistrationComponent } from './registration/registration.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MeanComponent } from './mean/mean.component';
import { MernComponent } from './mern/mern.component';
import { JavaComponent } from './java/java.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { ReactiveFormsModule } from '@angular/forms'
import {HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { RestComponent } from './rest/rest.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    HeadComponent,
    FooterComponent,
    NavigationComponent,
    ContactComponent,
    RegistrationComponent,
    GalleryComponent,
    HomeComponent,
    MeanComponent,
    MernComponent,
    JavaComponent,
    JavascriptComponent,
    RestComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    routes,HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
