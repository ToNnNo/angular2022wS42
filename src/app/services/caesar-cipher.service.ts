import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaesarCipherService {

  constructor() { }

  public encode(chaine: string): string {
    return (chaine + '').replace(/[a-zA-Z]/gi, (s) => {
      return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13));
    });
  }

  public decode(chaine: string): string {
    return this.encode(chaine);
  }
}
