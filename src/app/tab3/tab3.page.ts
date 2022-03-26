import { Component} from '@angular/core';




@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  contactlist = [
    {id: 1, name: 'Ken Bryan Dipa', email: 'Kenlauxzs@gmail.com'  ,number: '09123124216'},
    {id: 2, name: 'Kenlauxzs', email: 'Kenlauxzs@gmail.com'  ,number: '09164345316'},
    {id: 3, name: 'Test123', email: 'Test123@gmail.com'  ,number: '09162132354'},
   
  ]



  constructor() {
  }


}




