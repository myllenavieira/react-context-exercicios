import  Card  from "../components/Card";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";


export default function HomePage(){
    const context = useContext(GlobalContext);
    const {users, selection, usersList} = context;

    return(
        <>
        {users.map((user)=>{
            return(
            <Card 
            key={user.id}
            id={user.id}
            name={user.name}
            selection={selection}
            usersList={usersList}
            />)
            
        })}
        </>
    )
}