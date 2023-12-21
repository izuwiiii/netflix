import { MoviesDBService } from 'src/app/Services/movies-db.service';
import { Component } from '@angular/core';
import { BG_IMG_URL, LOGO_URL } from 'src/app/constants/config';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private toastr: ToastrService, private router: Router, private service: MoviesDBService) {}

  logoUrl = LOGO_URL;
  bgUrl = BG_IMG_URL;

  email: string;
  password: string;

  onSubmit() {
    if (!this.email || !this.password) {
      this.toastr.error("Provide email or password!", 'Error!')
    } else {
      this.toastr.success('You are welcome!', 'Log In complete')
      this.router.navigateByUrl('/Home')
    }
    this.service.name = this.email
  }
}
