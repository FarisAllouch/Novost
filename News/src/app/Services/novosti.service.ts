import { Injectable } from '@angular/core';
import { detaljno } from '../Modeli/detaljno';
import { Novosti } from '../Modeli/novosti';
import { Slika } from '../Modeli/slike';

@Injectable()
export class NovostiService {
  public novosti: Novosti[] = [
    {
      id: 0,
      novost: `Mijenja se odluka o izvozu drvnih sortimenata iz BiH u dijelu koji se odnosi na ogrjev`,
    },
  ];
  constructor() {
    console.log(this.novosti);
  }
  slika1: string =
    'https://static.klix.ba/media/images/vijesti/b_220714048.jpg?v=1';
  public slike: Slika[] = [{ id: 0, slika: this.slika1 }];
  public detaljno: detaljno[] = [
    {
      id: 0,
      tekst: `Na zahtjev Ministarstva vanjske trgovine i ekonomskih odnosa BiH za davanje mišljenja na Prijedlog za izmjenu Odluke o privremenoj zabrani izvoza određenih šumskih drvnih sortimenata, ogrijevnog drveta i proizvoda od drveta, Vlada Federacije BiH danas je utvrdila mišljenje.
`,
    },
  ];
  onDelete(id: number) {
    let novosti1 = this.novosti.find((x) => x.id === id);
    let index = this.novosti.indexOf(novosti1, 0);
    this.novosti.splice(index, 1);
  }
}
