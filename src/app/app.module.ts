import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './quote-form/form.component';
import { QuoteComponent } from './quote/quote.component';
import { HighlightQuoteDirective } from './highlight-quote.directive';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { TimeQuotePipe } from './time-quote.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QuoteComponent,
    HighlightQuoteDirective,
    QuoteDetailsComponent,
    TimeQuotePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
