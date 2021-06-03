import React from 'react';

function User({aaa}){
    return (
        <div>
                <b>{aaa.username}</b><span>({aaa.email})</span>
            </div>
    )
}



function UserList({users}){
   

    return (
        <div>
         {
             users.map(
                 bbb => (<User aaa={bbb} key={bbb.id} />) 
             )
         }
        </div>
    )

}

export default UserList;