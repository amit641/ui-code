import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home';
import {InvestorsComponent} from './investors/investors';
import {RentToBuyComponent} from './rentToBuy/rentToBuy';
import {SourcingComponent} from './sourcing/sourcing';
import {ContactComponent} from './contact/contact';
import { from } from 'rxjs';

const ROOTRUOTING: Routes = [
    {
        path:'investors',
        component:InvestorsComponent
    },
    {
        path:'sourcing',
        component:SourcingComponent
    },
    {
        path:'rentToBuy',
        component:RentToBuyComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'**',
        component:HomeComponent
    }
]

export const ROUTINGS = RouterModule.forRoot(ROOTRUOTING);