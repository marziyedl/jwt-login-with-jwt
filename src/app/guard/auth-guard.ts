import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DialogService } from '../dialog/services/dialog.service';
import { LoginHttpService } from '../login/services/login-http.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private Service: LoginHttpService,
        private dialogService :DialogService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,
        ) {
        const currentUser = this.Service.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.dialogService.show("لطفا وارد شوید");

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}