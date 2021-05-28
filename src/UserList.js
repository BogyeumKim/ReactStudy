import React from 'react';

function User({user}){
    return (
        <div>
                <b>{user.username}</b><span>({user.email})</span>
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
           <User user={users[0]} />
           <User user={users[1]} />
           <User user={users[2]} />
        </div>
    )

}

export default UserList;