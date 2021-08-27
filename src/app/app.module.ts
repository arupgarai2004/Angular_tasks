import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { HttpGetComponent } from './http-get/http-get.component';
import { ThirdComponent } from './third/third.component';
import { DirectInjectComponent } from './direct-inject/direct-inject.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ParentViewComponent } from './parent-view/parent-view.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { ChildOutputComponent } from './child-output/child-output.component';
import { ParentOutputComponent } from './parent-output/parent-output.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    DatabindingComponent,
    HttpGetComponent,
    ThirdComponent,
    DirectInjectComponent,
    ParentComponent,
    ChildComponent,
    ParentViewComponent,
    ChildViewComponent,
    ChildOutputComponent,
    ParentOutputComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
