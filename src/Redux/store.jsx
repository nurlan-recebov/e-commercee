import { configureStore } from "@reduxjs/toolkit";
import { CategoryApi } from "./CreateApi/api";

const store =
  configureStore(
    {
      reducer:
        {
          [CategoryApi.reducerPath]:
            CategoryApi.reducer,
        },
      middleware:
        (
          getDefaultMiddleware
        ) =>
          getDefaultMiddleware().concat(
            CategoryApi.middleware
          ),
    }
  );

export default store;
