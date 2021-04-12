import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-area',
  templateUrl: './filter-area.component.html',
  styleUrls: ['./filter-area.component.scss']
})
export class FilterAreaComponent implements OnInit {

  @Input() data: any;
  @Output() optionSelected = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  loadSelectedOption(optionSelected: any){
    this.optionSelected.emit(optionSelected);
  }

}
