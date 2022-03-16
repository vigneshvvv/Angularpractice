import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import{AppendPipe} from './childcomponent/custom.pipe'
import { FilterPipe } from './childcomponent/custom.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatSliderModule} from '@angular/material/slider'
import{MatButtonModule} from '@angular/material/button';
import{MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { Appservice } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NewchildComponent } from './newchild/newchild.component';
import { MenubarComponent } from './menubar/menubar.component';





@NgModule({
  declarations: [
    AppComponent,
    ChildcomponentComponent,
    AppendPipe,
    FilterPipe,
    LoginComponent,
    NewchildComponent,
    MenubarComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [Appservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
