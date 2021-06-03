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
]);

const nextId= useRef(4); // 초기값 4로 설정

const onCreate = () => {

  const user= {
    id : nextId.current,
    username,
    email, // 스프레드시트로하면 ...users
  }

  setUsers([...users,user]);

  setInputs({
    username:'',
    email:'',
  });

  console.log(nextId.current); // 현재값 출력
  nextId.current += 1; // onCreate가 실행될떄마다 출력하고 1씩더함
  // UseRef 쓰는이유는 실행마다 nextId값을 랜더링(컴포넌트를) 다시 할필요가 없기때문에 ( ajax같은느낌 ? )



}

  return (  
    <>
    <CreateUser username={username} 
    email={email} 
    onChange={onChange} 
    onCreate={onCreate}
    />
    <UserList users={users}/>
    </>
  );
}

export default App;
