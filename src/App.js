import React, {useRef} from 'react';
import UserList from './UserList';




function App() {

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

const nextId= useRef(4); // 초기값 4로 설정

const onCreate = () => {

  console.log(nextId.current); // 현재값 출력
  nextId.current += 1; // onCreate가 실행될떄마다 출력하고 1씩더함
  // UseRef 쓰는이유는 실행마다 nextId값을 랜더링 다시 할필요가 없기때문에 ( ajax같은느낌 ? )
}

  return (  
    <UserList users={users}/>
  );
}

export default App;
