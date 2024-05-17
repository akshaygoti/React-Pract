import { createStore } from "redux";

import rootreducer from "./Components/Redux/Reducers/main"

const Store = createStore (
    rootreducer
)
export default Store;