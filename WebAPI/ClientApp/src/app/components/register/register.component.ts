import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserRegisterModel } from 'src/app/models/register.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NOTIFICATION_SERV_TOKEN, NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  hide = false;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private authService: AuthenticationService,
    @Inject(NOTIFICATION_SERV_TOKEN) private notifier: NotificationService,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  saveUser(): void {
    const model = new UserRegisterModel();
    model.username = this.registerForm.get('username')!.value;
    model.email = this.registerForm.get('email')!.value;
    model.password = this.registerForm.get('password')!.value;
    this.authService.registerUser(model).subscribe(res => {
      if (res && res.success) {
        this.notifier.successNotification('successful!, welcome and fuck off');
        this.dialog.closeAll();
      } else {
        this.notifier.errorNotification(res.errors);
        this.dialog.closeAll();
      }
    });
    
  }

  close() {
    this.dialog.closeAll();
  }
}
