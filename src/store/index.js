import { configureStore } from "@reduxjs/toolkit";
import printers from "./states/printers.slice";
import auth from "./states/auth.slice";
import cart from "./states/cart.slice";



export default configureStore({
    reducer: {
        printers,
        auth,
        cart,
    }
});

