import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodosPage } from './pages/todos/todos.page';
import { CompletatiPage } from './pages/completati/completati.page';
import { Route, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: "",
    component: TodosPage
  },
  {
    path: "completati",
    component: CompletatiPage
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TodosPage,
    CompletatiPage,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
