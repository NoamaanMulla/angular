import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productsample',
  templateUrl: './productsample.component.html',
  styleUrls: ['./productsample.component.scss']
})
export class ProductsampleComponent implements OnInit {
  pname:string="";
  pimg:string="";
  change_info(event) {
    this.pname = event.target.value;
    if(event.target.value == "Laptop")
      {
      this.pimg = "https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    }
    else if (event.target.value == "TV")
      {
      this.pimg = "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=890&q=80"
    }
    else if (event.target.value == "Mobile")
      {
      this.pimg = "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    }
    else if (event.target.value == "Printer")
      {
      this.pimg = "https://images.unsplash.com/photo-1551781079-6e588ca249f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
