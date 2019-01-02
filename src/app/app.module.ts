import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { CalcComponent } from "./calc/calc.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { OnPushComponent } from "./on-push/on-push.component";
import { SimpleComponent } from "./simple/simple.component";

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    SimpleComponent,
    OnPushComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
