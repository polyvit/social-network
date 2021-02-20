import React from "react";
import s from "./ProfileInfo.module.css";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(status)
    }

    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode &&
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status}
                        </span>
                    }
                </div>
                <div>
                    {this.state.editMode &&
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                    }
                </div>
            </div>
        )
}
}

export default ProfileStatus

