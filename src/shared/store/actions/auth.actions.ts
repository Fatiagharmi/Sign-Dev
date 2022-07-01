import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth Component] login', props<{ email: string; password: string }>());
export const logout = createAction('[Auth Component] logout');
