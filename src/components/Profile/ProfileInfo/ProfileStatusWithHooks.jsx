import React, {useState, useEffect} from "react";

const ProfileStatusWithHooks = ({status, updateStatus}) => {

    let [editMode, setEditMode] = useState(false)
    let [localStatus, setStatus] = useState(status)

    useEffect(() => {
        setStatus(status)
    }, [status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(localStatus)
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
                            {status || "No status"}
                        </span>
                    }
                </div>
                <div>
                    {editMode &&
                        <input autoFocus={true} onBlur={deactivateEditMode}
                               onChange={onStatusChange} value={localStatus}/>
                    }
                </div>
            </div>
        )
}

export default ProfileStatusWithHooks

