import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { } from 'jest';
import { of } from 'rxjs';
import { User } from '../../../model/user';
import { UserService } from '../../../services/user/user.service';
import { UserListComponent } from './user-list.component';
import { By } from '@angular/platform-browser';
// import { By } from '@angular/platform-browser';


describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  // mock userService.list to return given value 
  let users: User[] = [{ id: '', email: 'zoltan.zsizsik@gmail.com', firstname: 'zoltán', lastname: 'zsizsik' }];
  let userService = {
    list: jest.fn().mockReturnValue(of(users))
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [{ provide: UserService, useValue: userService }],
    });
    fixture = TestBed.createComponent(UserListComponent);
  }));


  it('should create', () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  test('should contain ul', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('li'))[0].nativeElement.innerHTML).toBe(`${users[0].firstname} ${users[0].lastname}`);
  })

});
