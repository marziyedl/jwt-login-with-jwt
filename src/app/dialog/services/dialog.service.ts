import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from '../dialog.component';

@Injectable({
    providedIn:'root'
})
export class DialogService {  
  constructor(private modalService: NgbModal) {}

  public show( message:string) {
    const modalRef = this.modalService.open(DialogComponent);
    modalRef.componentInstance.message = message;
    return modalRef.result;
  }
}