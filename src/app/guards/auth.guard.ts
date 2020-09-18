import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export class AuthGuard implements CanActivate{

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean  {

        //тут  ми  можемо  дуже просто  перевірити  чи  користувач  авторизований  чи ні
        
        // SINCE OUR 'authService.user' IS OF TYPE 'Observable'
        // WE MUST USE 'subscribe' TO GET VALUE OF 'user'
        // return new Promise((resolve, reject) => {
        //     this.authService.user.subscribe((user) => {
        //       // here we check if user is logged in or not
        //       // the authService returs user object, or
        //       // it returns undefined/null when user is not logged in
        //       if (!user) {
        //         // just return false - if user is not logged in
        //         return resolve(false);
        //       } else {
        //         // just return true - if user is logged in
        //         return resolve(true);
        //       }
        //     });
        //   });
        
        //     // if (this.userService.isValid()) {
        //     //     return true;
        //   } else {
        //     this.router.navigate(['/login'], {
        //       queryParams: {
        //         return: state.url
        //       }
        //     });
        //     return false;
        //   }

        return confirm('Вы уверены, что хотите перейти?');

    }

}