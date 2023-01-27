import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function GlobalState(props) {

    const [users, setUsers] = useState([]);
    const [usersList, setUsersList] = useState([]);


    const getAllUsers = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                {headers: {
                        Authorization: "myllena-vieira-barbosa",
                    },}
            )
            .then((res) => {
                setUsers(res.data);
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    useEffect(() => {
        getAllUsers();
    }, [usersList.length]);

    const selection = (userToSelect) => {
        const isAlreadyOnSelection = usersList.find(
            (user) => user.id === userToSelect
        );
        if (!isAlreadyOnSelection) {
            const newUserSelected = [...usersList, userToSelect];
            setUsersList(newUserSelected);
        }
    };

    const context = {
        users: users,
        setUsers: setUsers,
        usersList: usersList,
        setUsersList: setUsersList,
        selection: selection
    }
    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}