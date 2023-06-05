import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserLoginModel } from 'src/app/models/login.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NOTIFICATION_SERV_TOKEN, NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = false;
  
  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    @Inject(NOTIFICATION_SERV_TOKEN) private notifier: NotificationService,
    private dialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    });
  }

  close() {
    this.dialog.closeAll();
  }

  save() {
    const model = new UserLoginModel();
    model.username = this.loginForm.get('username')!.value;
    model.password = this.loginForm.get('password')!.value;
    this.authService.login(model).subscribe(res => {
      if (res && res.token) {
        this.notifier.successNotification(`${res.userProfile.userName.toUpperCase()}: successfully logged In`);        this.dialog.closeAll();
      } else {
        this.notifier.errorNotification("Login Failure, please contact sys admin");
        this.dialog.closeAll();
      }
    });
  }
}
