import { NewComponent } from './new/new.component';
import { OtherComponent } from './other/other.component';
import { FirstComponent } from './first/first.component';
import { Routes } from '@angular/router';

export const routes:Routes=[
    {path:'',component:OtherComponent},
    {path:'other' ,component:OtherComponent},
    {path:'first',component:FirstComponent},
    {path:'new',component:NewComponent},
    {path:"**",component:OtherComponent}
];
