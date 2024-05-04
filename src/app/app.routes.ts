import { HeaderComponent } from './header/header.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SamplepageComponent } from './samplepage/samplepage.component';

export const routes: Routes = [
    {path:'',title:"Dashboard-page",component:DashboardComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component: RegisterComponent},
    {path:'content',component:ContentComponent},
    {path:'samplepage', component:SamplepageComponent},
];
