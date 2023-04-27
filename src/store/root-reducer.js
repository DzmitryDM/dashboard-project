import { combineReducers } from "redux";
import { positionReducer } from "./positions/positions-reducer";
import { filterReducer } from "./filters/filters-reducer";

const rootReducer = combineReducers({
	position: positionReducer,
	filters: filterReducer,
});

export { rootReducer };
