import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesModule } from './courses/courses.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ReduxDemoModule } from './redux-demo/redux-demo.module';
import { reducers } from './state';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavBarComponent],
  imports: [
    CoursesModule,
    ReduxDemoModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
