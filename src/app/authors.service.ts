import { Injectable } from '@angular/core';
import {Resource, Service} from 'ngx-jsonapi';

export class Author extends Resource {
  public attributes = {
    name: 'default name',
    date_of_birth: '',
    date_of_death: '',
    created_at: '',
    updated_at: ''
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthorsService  extends Service<Author> {
  public resource = Author;
  public type = 'authors';
}
