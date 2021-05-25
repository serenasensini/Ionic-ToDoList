import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ToDoListPage} from "../pages/to-do-list/to-do-list";
import { TasksProvider } from '../providers/tasks/tasks';
import { HttpClientModule} from "@angular/common/http";
import {ThemingPage} from "../pages/theming/theming";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ToDoListPage,
    ThemingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      // rippleEffect: false,
      // mode: 'ios'
    }),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ToDoListPage,
    ThemingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TasksProvider
  ]
})
export class AppModule {}
