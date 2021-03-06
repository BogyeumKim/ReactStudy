import React, {useRef, useState, useMemo , useCallback } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';


function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중 .. ');
  return users.filter(user => user.active).length;
}

function App() {

  const [inputs, setInputs] = useState({
    username:'',
    email:'',
  });

  const { username , email } = inputs;
  const onChange =useCallback (e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name] : value
    })
  },[inputs]);

  const [users, setUsers] = useState([
    {
        id:1,
        username : 'bogyeum',
        email : 'qhrua69@naver.com',
        active : true,
    },
    {
        id:2,
        username : 'test',
        email : 'test1@google.com',
        active : false,
    },
    {
        id:3,
        username : 'aabc',
        email : 'aabc@daum.com',
        active : false,
    }
]);

const nextId= useRef(4); // 초기값 4로 설정

const onCreate = useCallback(() => {

  const user= {
    id : nextId.current,
    username,
    email, // 스프레드시트로하면 ...users
  }

  // setUsers([...users,user]);
  setUsers(users=>users.concat(user));

  setInputs({
    username:'',
    email:'',
  });

  console.log(nextId.current); // 현재값 출력
  nextId.current += 1; // onCreate가 실행될떄마다 출력하고 1씩더함
  // UseRef 쓰는이유는 실행마다 nextId값을 랜더링(컴포넌트를) 다시 할필요가 없기때문에 ( ajax같은느낌 ? )
},[username,email])

const onRemove = useCallback( id => { 
  setUsers(users=>users.filter(user=>user.id !== id)); // 만족하는경우엔 넣음
  // id 3번 삭제누르면 3번만 걸리니까 id 1,2번만 가지고 다시 배열을 생성함
},[]);


const onToggle =  useCallback( id => {
  setUsers(users=>users.map(
    user=>user.id === id ? 
    {
      ...user, 
      active : !user.active 
    }
     : user
  ));

},[]);

// 특정값 업데이트할때는 ... user 기존의 useres를 수정하는게아니라 새로운 user에 넣고 덮어씌우기 map 
// 제거할때는 filter 
// 생성할때는 concat or 스프레드시트

  const count = useMemo( ()=> countActiveUsers(users), [users]); 

  return (  
    <>
    <CreateUser username={username} 
    email={email} 
    onChange={onChange} 
    onCreate={onCreate}
    />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
