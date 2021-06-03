import React, {useRef, useState} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';




function App() {

  const [inputs, setInputs] = useState({
    username:'',
    email:'',
  });

  const { username , email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name] : value
    })
  }

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

const onCreate = () => {

  const user= {
    id : nextId.current,
    username,
    email, // 스프레드시트로하면 ...users
  }

  // setUsers([...users,user]);
  setUsers(users.concat(user));

  setInputs({
    username:'',
    email:'',
  });

  console.log(nextId.current); // 현재값 출력
  nextId.current += 1; // onCreate가 실행될떄마다 출력하고 1씩더함
  // UseRef 쓰는이유는 실행마다 nextId값을 랜더링(컴포넌트를) 다시 할필요가 없기때문에 ( ajax같은느낌 ? )
}

const onRemove = id => { 
  setUsers(users.filter(user=>user.id !== id)); // 만족하는경우엔 넣음
  // id 3번 삭제누르면 3번만 걸리니까 id 1,2번만 가지고 다시 배열을 생성함
};


const onToggle = id => {
  setUsers(users.map(
    user=>user.id === id ? 
    {
      ...user, 
      active : !user.active 
    }
     : user
  ));

}

// 특정값 업데이트할때는 ... user 기존의 useres를 수정하는게아니라 새로운 user에 넣고 덮어씌우기 map 
// 제거할때는 filter 
// 생성할때는 concat or 스프레드시트


  return (  
    <>
    <CreateUser username={username} 
    email={email} 
    onChange={onChange} 
    onCreate={onCreate}
    />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;
