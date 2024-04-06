import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize, tap } from 'rxjs';
import { LoaderService } from '../../services/loader';
import { NotificationService } from '../../services/notification';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService = inject(LoaderService);
  const notification = inject(NotificationService);

  loaderService.showLoader();

  return next(req).pipe(
    tap(() => {
      if (!navigator.onLine) {
        notification.info('Atenção! Conexão com a internet interrompida');
      }
    }),
    finalize(() => {
      loaderService.hideLoader();
    })
  );
};
