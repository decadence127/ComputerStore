import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    makeAutoObservable(this);
  }
  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setUserData(user) {
    this._user = user;
  }
  get isAuth() {
    return this._isAuth;
  }
  get userData() {
    return this._user;
  }
}
