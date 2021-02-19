import React from "react";
import s from "./ProfileInfo.module.css";


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.state.editMode = true
    }

    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode &&
                        <span onDoubleClick={this.activateEditMode.bind(this)}>
                            {this.props.status}
                        </span>
                    }
                </div>
                <div>
                    {this.state.editMode &&
                        <input value={this.props.status}/>
                    }
                </div>
            </div>
        )
}
}

export default ProfileStatus

