import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Layouts
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
// import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
// import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

// Public Pages
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';

// User Pages
// import { DashboardComponent } from './features/dashboard/dashboard.component';
// import { AddExpenseComponent } from './features/expenses/add-expense.component';
// import { SummaryComponent } from './features/summary/summary.component';

// Admin Pages
// import { AdminDashboardComponent } from './features/admin/dashboard-admin.component';
// import { ManageUsersComponent } from './features/admin/manage-users.component';
// import { ManageExpensesComponent } from './features/admin/manage-expenses.component';

// import { AuthGuard } from './core/guards/auth.guard';       // Optional: protect user pages
// import { AdminGuard } from './core/guards/admin.guard';     // Optional: protect admin pages

const routes: Routes = [
  
  // Public layout (home, login, register)
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },

  // // User layout (protected)
  // {
  //   path: 'user',
  //   component: UserLayoutComponent,
  //   canActivate: [AuthGuard],  // Only logged-in users
  //   children: [
  //     { path: 'dashboard', component: DashboardComponent },
  //     { path: 'add-expense', component: AddExpenseComponent },
  //     { path: 'summary', component: SummaryComponent }
  //   ]
  // },

  // // Admin layout (protected)
  // {
  //   path: 'admin',
  //   component: AdminLayoutComponent,
  //   canActivate: [AdminGuard], // Only admins
  //   children: [
  //     { path: 'dashboard', component: AdminDashboardComponent },
  //     { path: 'manage-users', component: ManageUsersComponent },
  //     { path: 'manage-expenses', component: ManageExpensesComponent }
  //   ]
  // },

  // Wildcard fallback
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
