import { Routes } from '@angular/router';
import { LayoutComponent } from './layouts';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [{
            path: '',
            loadComponent: () => import('./features/submissions-list/submissions-list.component').then(m => m.SubmissionsListComponent)
        }, {
            path: '*',
            redirectTo: ''
        }]
    }
];