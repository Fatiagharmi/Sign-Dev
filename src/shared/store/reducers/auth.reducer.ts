import { createReducer, on } from '@ngrx/store';
import { login, logout } from '../actions/auth.actions';

export let isLog = localStorage.getItem('authStatus') === 'loggedIn' ? true : false;

export const authReducer = createReducer(
  isLog,
  on(login, (state) => {
    localStorage.setItem('authStatus', 'loggedIn');
    return (state = true);
  }),
  on(logout, (state) => {
    localStorage.setItem('authStatus', 'loggedOut');
    return (state = false);
  })
);
