import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Data} from '../shared/interfaces';
import {TableService} from '../shared/services/table.service';

const API = 'assets/data2.json';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})


export class TableComponent implements OnInit {
  data: Data; // Main response from server
  sortedData: any; // Copying data array an array for display at UI
  hideCell: number[] = [3, 5, 8, 11, 12, 13, 14, 15, 16, 17, 18]; // Default hidden columns
  hideCellCopy: number[] = []; // Copying 'hideCell' array
  p = 1; // Current Page
  displayItems = '10'; // Display page Items
  allItems: number; // Calculating all items
  columnWidth = 'auto'; // Calculating column width


  sortedColumn: number; // Get sortered column index
  orderBy: string; // Get order column
  search = ''; // Search text


  constructor(private http: HttpClient, private tableService: TableService) {
  }

  ngOnInit() {
    // Get response from Service
    this.tableService.getDataFromApi(API).subscribe(response => {
      this.data = response; // Main response
      this.sortedData = response['data'].slice(); // Copying data array an array for display
      this.allItems = response.data.length; // Calculate the length of the entire array
      this.mathColumnWidth(this.hideCell.length);
    });
  }



  // Switcher for hidden and display columns: "idx" - index of column
  switchDisplayColumn(idx: number): void {
    if (idx !== 0) { // First column always visibility
      if (this.hideCell.includes(idx)) {
        const index = this.hideCell.findIndex(d => d === idx); // Get item index from hidden columns array
        this.hideCell.splice(index, 1); // Remove the column from hidden list
      } else {
        this.hideCell.push(idx); // Push column index to hidden array
      }
    } else {
      this.hideCellCopy = this.hideCell.slice();
      this.hideCell = [];
    }
    this.mathColumnWidth(this.hideCell.length);
  }


  // Calculating Column Width: "hiddenColumns" - Count of hidden columns
  mathColumnWidth(hiddenColumns: number): string {
    if (hiddenColumns > 5) {
      this.columnWidth = 100 / (this.data['meta']['columns'].length - hiddenColumns) + '%';
    } else {
      this.columnWidth = 'auto'; // Auto width calculation
    }
    return this.columnWidth;
  }


  // Sorting data in columns
  sortColumn(idx): void {
    const data = this.data['data'].slice();
    if (this.sortedColumn === idx && this.orderBy === 'desc') {
      this.orderBy = 'asc';
      this.sortedData = data.sort((a, b) =>
        a[idx] > b[idx] ? -1 : 1
      );
    } else {
      this.orderBy = 'desc';
      this.sortedData = data.sort((a, b) =>
        a[idx] > b[idx] ? 1 : -1
      );
    }
    this.sortedColumn = idx;
  }
}
