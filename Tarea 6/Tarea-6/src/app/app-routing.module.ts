import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Rutas para cada componente
import { InicioComponent } from './pages/inicio/inicio.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ExtracurricularComponent } from './pages/extracurricular/extracurricular.component';
import { InfoContactoComponent } from './pages/info-contacto/info-contacto.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'education', component: EducacionComponent},
  {path: 'projects', component: ProyectosComponent},
  {path: 'extracurricular', component: ExtracurricularComponent},
  {path: 'contact', component: InfoContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
