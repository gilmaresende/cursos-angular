import { Component, OnInit } from "@angular/core";
import { ModelBase } from "src/app/models/modelbase";

@Component({
   template: ''
})
export abstract class BaseComponent<Modal extends ModelBase> implements OnInit {

   ob: ModelBase

   ngOnInit(): void {
   }

}