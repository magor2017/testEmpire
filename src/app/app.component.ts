import { Component } from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { PaiementService } from "./service/paiement.service"



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // providers: [NgbModalConfig, NgbModal]
})
export class AppComponent {
  tel:string=undefined;
  forfait:string="0";
  numError:boolean=false;
  forfaitError:boolean=false;
  closeResult: string;
  animal: string;
  name: string;
  val:string;
  constructor(config: NgbModalConfig, private modalService: NgbModal,private paiementService:PaiementService){
    config.backdrop = 'static';
    config.keyboard = false;
  }
  title = 'testEmpire';
  forfaits=[
    {
      item_name:"",
      item_price:"",
      id:0
  },
    {
      item_name:"farfait 1 mois",
      item_price:"1000",
      id:1
  },
  {
      item_name:"forfait 6 mois",
      item_price:"3000",
      id:2
  },
  {
      item_name:"forfait 12 mois",
      item_price:"6000",
      id:3
  }
  ];
  open(content) {
    if(this.verif_tel(this.tel)){
      this.modalService.open(content);
      this.paiementService.getToken(779013878,1).then(rep =>{
        this.val="1";
        console.log(rep);
      })
    }
  }
  close(){
    this.modalService.dismissAll();
  }
  verif_tel(num){
    let length=num===undefined?0:num.length;
    if(length===9 && num[0]==="7" && (num[1]==="7" || num[1]==="8")){
      for(let i=0;i<num.length;i++){
        if(!this.isNumber(num[i])){
          this.numError=true;
          return false;
        }
      }
      return true;
    }else{
      this.numError=true;
      return false;
    }
  }
  isNumber(n){
    let num=["0","1","2","3","4","5","6","7","8","9"];
    for(let i=0;i<num.length;i++){
      if(num[i]===n){
        return true;
      }
    }
    return false;
  }
  numBool(){
    this.numError=false;
  }
  toOm(){
    this.val="2";
  }
  getForfait(id){
    let i=parseInt(id);
    return this.forfaits[i].item_name;
  }
  getPrice(id){
    let i=parseInt(id);
    return this.forfaits[i].item_price;
  }
}
