import { Routes } from '@angular/router';
import { Detalle1 } from './detalle1/detalle1';
import { Detalle2 } from './detalle2/detalle2';
import { Detalle3 } from './detalle3/detalle3';
import { NoEncontrado } from './no-encontrado/no-encontrado';

export const routes: Routes = [
    {
    path: 'detalle1',
    component: Detalle1,
    title: 'Detalle 1',
    },
    {
    path: 'detalle2/:miparam',
    component: Detalle2,
    title: 'Detalle 2',
    },
    {
    path: 'detalle3/:miparam1/:miparam2',
    component: Detalle3,
    title: 'Detalle 3',
    },
    {
    path: '**',
    component: NoEncontrado,
    title: 'Pagina no encontrada',
    }

];
