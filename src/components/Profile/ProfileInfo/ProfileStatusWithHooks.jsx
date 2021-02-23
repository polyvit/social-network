import React from "react";
import {useEffect, useState} from "react/cjs/react.production.min";


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }


        return (
            <div>
                <div>
                    {!editMode &&
                        <span onDoubleClick={activateEditMode}>
                            {props.status || "No status"}
                        </span>
                    }
                </div>
                <div>
                    {editMode &&
                        <input autoFocus={true} onBlur={deactivateEditMode}
                               onChange={onStatusChange} value={status}/>
                    }
                </div>
            </div>
        )
}

export default ProfileStatusWithHooks

