import React from 'react';


type PropsType = {
    status: string
}

class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true    // асинхронен
        })
    }
    deActivateEditMode() {
        this.setState({
            editMode: false    // асинхронен
        })
    }

    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>}
                </div>
                <div>
                    {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deActivateEditMode.bind(this)} value={this.props.status}/>
                    </div>}
                </div>
            </div>
        )
    }
}


export default ProfileStatus;