import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  loginObj:any= {
    "EmailId": "",
    "Password": ""
  }

  http = inject(HttpClient);
  onLogin(){
    console.log("login")
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", this.loginObj).subscribe((res:any)=>{
      if(res.result){
        alert("login success")
      }
      else {
        alert("login error")
      }

    }
  )}
}
