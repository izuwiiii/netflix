import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieCategoryComponent } from './components/movie-category/movie-category.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
// import { CarouselModule } from 'primeng/carousel';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { FooterComponent } from './components/footer/footer.component';
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    MovieCategoryComponent,
    MovieCardComponent,
    BrowseComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ButtonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    
  ],
  providers: [
              provideAnimations(), // required animations providers
              provideToastr(),
             ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
  
})
export class AppModule { }
