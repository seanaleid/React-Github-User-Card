import React, {useEffect} from "react";

function UserCard(props){
    const { user } = props;
    useEffect(() =>{
        console.log(user);
    }, [user]);

    return(
        <div>
            <p>Name: {props.name}</p>
        </div>
    );
};

export default UserCard;