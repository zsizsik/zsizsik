import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UserListComponent } from './components/user/user-list/user-list.component';



@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],

})
export class UserModule { }
