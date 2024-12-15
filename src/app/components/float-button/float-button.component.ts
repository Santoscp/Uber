import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatMenu} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'


@Component({
  selector: 'app-float-button',
  standalone: true,
  imports: [MatSidenavModule,MatMenu,MatToolbarModule,MatButtonModule,MatIconModule,MatListModule],
  templateUrl: './float-button.component.html',
  styleUrl: './float-button.component.css'
})
export class FloatButtonComponent {
  @Output() fabClick = new EventEmitter<void>();

  onClick() {
    this.fabClick.emit();
  }

}
