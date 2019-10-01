import React, {useEffect} from "react";

function UserCard(props){
    const { user } = props;
    useEffect(() =>{
        console.log(user);
    }, [user]);

    return(
        <div>
            <p>Username: {props.user.login}</p>
            <img src={props.user.avatar_url} alt="User photograph"/>
            <p>Website: {props.user.url}</p>
            <p>Followers: {props.user.followers}</p>
        </div>
    );
};

export default UserCard;