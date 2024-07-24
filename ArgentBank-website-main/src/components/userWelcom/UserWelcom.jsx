import { useState } from "react";
import { useSelector } from "react-redux";
import EditName from "../editName/EditName";

import "./UserWelcom.scss";

export default function UserWelcom() {
    const [edit, setEdit] = useState(false);

    const userName = useSelector((state) => state.user.dataUser.userName);

    return (
        <div className="header">
            {edit ? (
                <EditName setEdit={setEdit} />
            ) : (
                <>
                    <h1>
                        Welcom back
                        <br />
                        {userName}!
                    </h1>
                    <button className="edit-button" onClick={() => setEdit(true)}>
                        Edit Name
                    </button>
                </>
            )}
        </div>
    );
}
