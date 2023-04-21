import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { UserInfo, Account } from '../../models/common';

export interface AuthState {
    isLoggedIn?: boolean;
    logging?: boolean;
    error?: string;
    userInfo?: UserInfo;
    isDisable?: boolean;
  }
  
  const initialState: AuthState = {
    isLoggedIn: false,
    logging: false,
    error: undefined,
    userInfo: undefined,
  };
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login(state, action: PayloadAction<Account>) {
        state.logging = true;
        state.error = undefined;
      },
      loginSuccess(state) {
        state.logging = false;
        state.isLoggedIn = true;
      },
      loginFailed(state, action: PayloadAction<string>) {
        state.logging = false;
        state.error = action.payload;
      },
      fetchUserInfo(state) {
        state.userInfo = undefined;
      },
      fetchUserInfoSuccess(state, action: PayloadAction<UserInfo>) {
        state.userInfo = action.payload;
        state.isLoggedIn = true;
      },
      logout(state) {
        state.logging = false;
        state.isLoggedIn = false;
      },
      setIsDisable(state, action: PayloadAction<boolean>){
        state.isDisable = action.payload
      },
    },
  });
  export const authActions = authSlice.actions;
  
  export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
  export const selectLogging = (state: RootState) => state.auth.logging;
  export const selectError = (state: RootState) => state.auth.error;
  export const selectUserInfo = (state: RootState) => state.auth.userInfo;
  export const selectIsDisable = (state: any) => state.auth.isDisable;
  
  const authReducer = authSlice.reducer;
  export default authReducer;
  