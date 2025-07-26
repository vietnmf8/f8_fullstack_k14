import {configureStore} from "@reduxjs/toolkit";
import countSlice from "./Count/index.jsx";
import productsSlice from "./Product/index.jsx";

const store = configureStore({
    reducer: {
        count: countSlice.reducer,
        products: productsSlice.reducer,
        // Add other slices here if needed
    }
});

export {
    store
}

export * from './Count';
export * from './Product';