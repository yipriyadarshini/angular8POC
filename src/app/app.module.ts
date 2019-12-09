import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ServerComponent } from "./server/server.component";
import { SuccessalertComponent } from './successalert/successalert.component';
import { FailalertComponent } from './failalert/failalert.component';
import { UsernameComponent } from './username/username.component';
import { DirectivesampleComponent } from './directivesample/directivesample.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ServerComponent, SuccessalertComponent, FailalertComponent, UsernameComponent, DirectivesampleComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
