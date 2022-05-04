import {
  MiddlewareAPI,
  isRejectedWithValue,
  Middleware,
} from "@reduxjs/toolkit";
import { snackActions } from "../../utils/helpers/snackBarUtils";

export const rtkQueryErrorMiddleware: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      const rejectedValue = action.payload;
      if (rejectedValue.status === 404) {
        snackActions.error("Data you have requested was not found");
      } else if (rejectedValue.status === 401) {
        snackActions.error("You are unauthenticated");
      } else if (rejectedValue.status === 403) {
        snackActions.error("You have no access to this page.");
      } else {
        snackActions.error(rejectedValue.data.msg || "Internal server error");
      }
    }
    return next(action);
  };
