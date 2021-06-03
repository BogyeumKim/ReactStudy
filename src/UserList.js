import React from 'react';

function User({aaa, onRemove, onToggle}){

    const { username, email, id, active} = aaa;

    return (
        <div>
                <b style={{
                    color : active ? 'green' : 'black',
                    cursor:'pointer'
                }} onClick={() => onToggle(id)}
                
                >{username}</b><span>({email})</span>
                <button onClick={ ()=> onRemove(id)}>삭제</button>
                {/* () 애로우펑션을 안하고 그냥 쓰면 랜더링하면서 바로 실행됨 */}
                
            </div>
    )
}



function UserList({users, onRemove, onToggle}){
   

    return (
        <div>
         {
             users.map(
                 bbb => (<User
                     aaa={bbb} 
                    key={bbb.id}
                     onRemove={onRemove}
                     onToggle={onToggle}
                     />) 
             )
         }
        </div>
    )

}

export default UserList;