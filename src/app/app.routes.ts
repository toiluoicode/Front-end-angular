import { HeaderComponent } from './header/header.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SamplepageComponent } from './samplepage/samplepage.component';

export const routes: Routes = [
    { path: '', redirectTo: '/samplepage', pathMatch: 'full' },  // Điều hướng trang mặc định tới /login
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent},  // Bảo vệ trang Dashboard
    { path: 'content', component: ContentComponent },  // Bảo vệ trang Content
    { path: 'samplepage', component: SamplepageComponent }
];
