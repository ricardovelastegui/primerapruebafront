import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './components/home/home.component';
import { VerComponent } from './components/ver/ver.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { AgregarreclComponent } from './components/agregarrecl/agregarrecl.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  
  {
  path: 'obtener',
  component: HomeComponent,
  
  },
  {
  
  path: 'register',
  component: RegisterComponent,
  },
  {path: 'agregarrecl', component: AgregarreclComponent   },
  {path: 'actualizar/:id', component: ActualizarComponent},
  {path: 'ver/:id', component: VerComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
