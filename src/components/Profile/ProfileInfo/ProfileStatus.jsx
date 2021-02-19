import React from "react";
import s from "./ProfileInfo.module.css";


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    render() {
        return (
            <div>
                <div>
                    <span>{props.status}</span>
                </div>
                <div>
                    <input value={props.status}/>
                </div>
            </div>
        )
}
}

export default ProfileStatus

