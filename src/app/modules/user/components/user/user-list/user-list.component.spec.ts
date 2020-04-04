import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { } from 'jest';
import { of } from 'rxjs';
import { User } from '../../../model/user';
import { UserService } from '../../../services/user/user.service';
import { UserListComponent } from './user-list.component';


describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  // mock userService.list to return given value 
  let users: User[] = [new User()];
  let userService = {
    list: jest.fn().mockReturnValue(of(users))
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [{ provide: UserService, useValue: userService }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
