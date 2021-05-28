import React from 'react';

function User({aaa}){
    return (
        <div>
                <b>{aaa.username}</b><span>({aaa.email})</span>
            </div>
    )
}



function UserList(){
    const users = [
        {
            id:1,
            username : 'bogyeum',
            email : 'qhrua69@naver.com',
        },
        {
            id:2,
            username : 'test',
            email : 'test1@google.com',
        },
        {
            id:3,
            username : 'aabc',
            email : 'aabc@daum.com',
        }
    ];

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