import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";


type RedirectComponentPropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): RedirectComponentPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
};

export function withAuthRedirect<T>(Component: ComponentType<T>) {


    const RedirectComponent = (props: RedirectComponentPropsType) => {

        let {isAuth, ...restProps} = props
        if (!props.isAuth) return <Redirect to='/login'/>

        return <Component {...restProps as T}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedAuthRedirectComponent;
}