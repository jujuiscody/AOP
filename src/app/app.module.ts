import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DirectiveComponent } from './directive/directive.component';
import { AttributeDirective } from './directive/directives/attribute.directive';
import { DelayDirective } from './directive/directives/delay.directive';
import { ListComponent } from './list component/list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseService } from './Course.Service';


@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    AttributeDirective,
    DelayDirective,
    ListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
