import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomesService } from '../../services/homes.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm = '';
  homes = this.homeService.homesWithPrices;


  constructor(private homeService: HomesService) { }
}
