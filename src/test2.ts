import { Observable } from 'rxjs'
import { delay, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const localStorage: any = {};

interface Utilisateur {
  name: string;
}

// Appel HTTP
const login = (): Observable<string> => {
  return of('auth-details').pipe(delay(1000));
};

// Auth service
const authServiceLogin = (): Observable<string> => {
  return login().pipe(switchMap((authDetails: string) => mapDetails(authDetails)));
};

// Auth service - map
const mapDetails = (authDetails: string): Observable<string> => {
  localStorage.authDetails = authDetails + '-mod';
  return of(authDetails);
};

const authentifie = (authDetails: string): Observable<Utilisateur> => {
  return getConnectedUtilisateur();
};

const getConnectedUtilisateur = (): Observable<Utilisateur> => {
  
};

authServiceLogin().subscribe(result => {
  console.log(result);
  console.log('Local storage', localStorage);
});
