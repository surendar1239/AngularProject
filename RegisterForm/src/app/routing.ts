import { ListStudentComponent } from './list-student/list-student.component';
import {  RegisterFormComponent } from './register-form/register-form.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AppComponent } from './app.component'
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
    {path:'list-student', component:ListStudentComponent},
    {path:'add-student', component:RegisterFormComponent},
    {path:'', component:AppComponent},
    {path:'edit/:studentid', component: EditStudentComponent}
];

export const routing = RouterModule.forRoot(routes);