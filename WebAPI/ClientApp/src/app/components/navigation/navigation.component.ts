import { Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  authenticated: boolean;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
   // nothing for now
  }

  registerUser(): void {
    this.dialog.open(RegisterComponent, {
      width: '30%',
      height: 'auto',
      panelClass: 'custom-dialog'
    })

  }

  loginUser(): void {
    this.dialog.open(LoginComponent, {
      width: '30%',
      height: 'auto',
      panelClass: 'custom-dialog'
    })
  }

  logoutUser(): void {
    // nothing for now
  }
}
