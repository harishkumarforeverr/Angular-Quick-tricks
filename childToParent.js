// parent
1. parent file  js file
   view: string = 'vendor';
  constructor() {}

  ngOnInit(): void {}

  setView(val: string) {
    this.view = val;
  }
  takevendorViewHandler(val: string) {
    this.setView(val);
  }

1. parent html
  <app-vendor-profile
    (vendorView)="takevendorViewHandler($event)"
  ></app-vendor-profile>




2. child compoent
js file
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
  @Output() vendorView = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  handleCount(val: string) {
    this.vendorView.emit(val);
  }


2. html file

<i (click)="handleCount('vendor')" class="pi pi-arrow-left"></i>
