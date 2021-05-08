import {getAuthUserData} from "./auth-reducer";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type InitialStateType = {
    initialized: boolean
}
export type AppReducerActionType = ReturnType<typeof initializedSuccess>
type ThunkType = ThunkAction<void, AppStateType,
    Dispatch<AppReducerActionType>, AppReducerActionType>

let initialState: InitialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action: AppReducerActionType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = (): ThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    debugger
    //dispatch(somethingelse());
    //dispatch(somethingelse());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}


export default appReducer;