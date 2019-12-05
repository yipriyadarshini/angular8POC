import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ServerComponent } from "./server/server.component";
import { SuccessalertComponent } from './successalert/successalert.component';
import { FailalertComponent } from './failalert/failalert.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ServerComponent, SuccessalertComponent, FailalertComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
