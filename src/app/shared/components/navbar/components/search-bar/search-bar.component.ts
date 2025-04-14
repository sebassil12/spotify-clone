import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  /* Element used in template to default value of search */
  searchQuery: string = '';

  /* Decorator to help me communicate events with EventEmitter */
  @Output() search = new EventEmitter<string>();

  /* Function called in template when the enter is pressed or the button search is pressed*/
  onSearch() {
    this.search.emit(this.searchQuery);
  }
}