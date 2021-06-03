import React from 'react';

function User({aaa, onRemove}){

    const { username, email, id} = aaa;

    return (
        <div>
                <b>{username}</b><span>({email})</span>
                <button onClick={ ()=> onRemove(id)}>삭제</button>
                {/* () 애로우펑션을 안하고 그냥 쓰면 랜더링하면서 바로 실행됨 */}
                
            </div>
    )
}



function UserList({users, onRemove}){
   

    return (
        <div>
         {
             users.map(
                 bbb => (<User
                     aaa={bbb} 
                    key={bbb.id}
                     onRemove={onRemove}
                     />) 
             )
         }
        </div>
    )

}

export default UserList;