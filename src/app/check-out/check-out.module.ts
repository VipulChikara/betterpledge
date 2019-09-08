import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgProgressModule } from "ngx-progressbar";
import { CoreModule } from "../Core/core.module";
import { CheckOutComponent } from "./check-out.component";
import { CheckOutRoutingModule } from "./check-out-routing.module";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations:[
        CheckOutComponent
    ],
    imports:[
    CommonModule,
    NgProgressModule,
    CoreModule,
    FormsModule,
    RouterModule,
    NgbModule,
    CheckOutRoutingModule
    ]
})
export class CheckOutModule{

}