import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GithubPageComponent } from './components/github-page/github-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomePageComponent, GithubPageComponent, ProjectsPageComponent, JumbotronComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
