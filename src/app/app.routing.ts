import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { RegisterComponent } from "./component/register/register.component";
import { LoginComponent } from "./component/login/login.component";

const appRoutes = [
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    { 
        path: "", 
        redirectTo: "login", 
        pathMatch: "full" 
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class RoutingModule {}