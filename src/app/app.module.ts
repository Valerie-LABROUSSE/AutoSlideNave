import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BodyComponent } from './body/body.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
   path: 'home',
    component: HomeComponent},
  {
    path: 'bio',
    component: BioComponent},
  {
    path: 'realisations',
    component: RealisationsComponent},
    {
    path: 'detail',
    component: DetailComponent},
  {
    path: 'contacts',
    component: ContactsComponent},
  {
      path: '**',
      component: Page404Component}

// path = ' ' signifie que si on a du blanc dans l'url après la home page, le
// routeur nous affiche la page bio par défaut
// path = "**" : s'il y a n'importe quoi dans l'url, le routeur nous affiche la page bio
// L'ordre des chemins est important
// patchMatch : il faut que ça corresponde exactement à ce qui est mis dans le path

// { path: '', redirectTo: '/home', pathMatch: 'full' },
// { path: '**', redirectTo: '/page404'}
   ] ;


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    BodyComponent,
    BioComponent,
    RealisationsComponent,
    ContactsComponent,
    HomeComponent,
    Page404Component,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
