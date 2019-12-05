import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ServerComponent } from "./server/server.component";
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ServerComponent, TestComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
