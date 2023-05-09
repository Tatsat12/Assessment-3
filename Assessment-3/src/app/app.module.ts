import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { FilterPipe } from './filter.pipe'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UpdateComponent,
    FilterPipe
    
  ],
  imports: [
    RouterModule, 
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
