import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LangusComponent } from './components/langus/langus.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DetailsComponent } from './components/details/details.component';
import { Route, RouterModule } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AboutComponent } from './components/about/about.component';
// import { AppRoutingModule } from './app-routing.module';

const Routes: Route[] = [
    {path: 'home', component: LangusComponent, title: 'home'},
    {path: 'detail/:id', component: DetailsComponent, title: 'detail'},
    {path: 'about', component: AboutComponent, title: 'about'},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: NotfoundComponent, title: 'not found'}
]


@NgModule({
    declarations: [
        AppComponent,
        LangusComponent,
        NavigationComponent,
        DetailsComponent,
        NotfoundComponent,
        AboutComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        // AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(Routes),
    ]
})
export class AppModule { }
