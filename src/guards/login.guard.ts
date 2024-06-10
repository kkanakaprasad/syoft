import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { STORAGE_KEYS } from '../enums/storage.enum';
import { StorageService } from 'src/shared/storage-service/storage.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const storageService = inject(StorageService);
  const router = inject(Router);
  const token = storageService.getDataFromLocalStorage(STORAGE_KEYS.USER_DATA);

  if (token) {
    return true;
  } else {
    return router.createUrlTree(['home']);
  }
};
