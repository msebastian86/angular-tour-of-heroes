import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 11, name: 'Batman' },
      { id: 12, name: 'The Tick' },
      { id: 13, name: 'Coach Trevor' },
      { id: 14, name: 'Ronnie Coleman' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Edi 800' },
      { id: 19, name: 'Magma' },
      { id: 19, name: 'Bogdan Smoleń' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }
}