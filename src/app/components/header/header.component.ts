import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logout } from 'src/shared/store/actions/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router: Router, private store: Store<{ isLog: boolean }>) {
    store.select('isLog').subscribe(() => {
      store.select('isLog').forEach((el: any) => {
        this.isLoggedIn = el;
      });
    });
  }

  ngOnInit(): void {}

  logout() {
    this.store.dispatch(logout());

    this.router.navigateByUrl('/login');
  }
}
