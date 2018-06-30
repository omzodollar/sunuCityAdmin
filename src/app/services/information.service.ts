import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Information } from '../model/information.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class InformationService {

  constructor(private httpClient:HttpClient) {}

  private informationUrl = 'http://localhost:9090/Informations';

  public getInformations() {
    return this.httpClient.get<Information[]>(this.informationUrl);
  }

  public deleteInformations(information) {
    return this.httpClient.delete(this.informationUrl + "/"+ information.id);
  }

  createInformations(information) {
    this.httpClient.post(this.informationUrl,information)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}

}
