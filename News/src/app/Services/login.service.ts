import { Injectable } from '@angular/core';
import { Register } from '../Modeli/register';
@Injectable()
export class LoginService {
  public login: string = 'Login';
  public registar: Register[] = [
    { id: 0, name: 'Faris', email: 'admin123@gmail.com', password: '123' },
  ];
}
