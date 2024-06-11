import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { STORAGE_KEYS } from 'src/enums/storage.enum';
import { StorageService } from 'src/shared/storage-service/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userRole: any;
  userDetails: any;

  constructor(private storageService:StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUserDetails()
  }

  getUserDetails(){
    this.userDetails =this.storageService.getDataFromLocalStorage(STORAGE_KEYS.USER_DATA)
    this.userDetails=this.userDetails[0]

  }

  onLogout(){
    this.storageService.clearLocalStorage();
    this.router.navigate(['/home']);
  }
}
