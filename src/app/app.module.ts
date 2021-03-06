import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './ngrx/users.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        UsersModule,
        StoreModule.forRoot({ }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([])
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
