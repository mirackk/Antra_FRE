import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  @Input() users: any[] = [];
  filteredUsers: any[] = [];
  filterControl = new FormControl('');

  ngOnInit(){
    this.filteredUsers = this.users;
    // subscribe不会，抄的
    this.filterControl.valueChanges.subscribe(value => this.filterUsers(value || ''));
  }

  ngOnChanges(){
    this.filteredUsers = this.users;
  }

  filterUsers(filter: string) {
    if (filter) {
      this.filteredUsers = this.users.filter(user =>
        user.login.toLowerCase().includes(filter.toLowerCase()) ||
        user.id.toString().includes(filter) ||
        user.url.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      this.filteredUsers = this.users;
    }
  }
}
