import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { Login } from 'src/app/shared/models/login.model';
import { Observable } from 'rxjs'

const LS_CHAVE: string = "usuarioLogado";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { } 
  
  public get usuarioLogado(): Usuario {
    let usu = localStorage[LS_CHAVE];
    return (usu ? JSON.parse(localStorage[LS_CHAVE]) : null);
  }
  public set usuariLogado(usuario: Usuario) {
    localStorage[LS_CHAVE] =JSON.stringify(usuario);
  }
  logout() {
    delete localStorage[LS_CHAVE];
  }
  login(login: Login) : Observable<Usuario | null> {
    let usu = new Usuario(1,"Razer-Func", login.login, login.senha, "FUNC");
     if (login.logim == login.senha) {
      if (login.logim == "admin") {
         usu = new Usuario(1 "Razer-Admin", login.logim, login.senha, "ADMIN");
      }
      else if (login.login == "gerente") {
         usu = new Usuario(1, "Razer-Gerente", login.login, login.senha, "GERENTE");
     }
     return of(usu);
     }
     else {
      return Of(null);
     }
  }
}
