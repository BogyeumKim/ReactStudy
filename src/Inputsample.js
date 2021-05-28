import React , {useSta, useState} from 'react';

function InputSample(){
    const [inPuts, setInputs] = useState({
        name: '',
        nickname : '', 
    });

    const {name,nickname} = inPuts;

    const onChage = (e) => {
        const {name, value } = e.target;

        setInputs({ 
            ...inPuts, // 스프레드 문법으로 배열의 값을 복사함 
            [name]:value
         });
    }

    const onReset = () =>{

        setInputs({
            name : '',
            nickname : '',
        });
    
    }
    return(

        <div>
            <input name="name" placeholder='이름' onChange={onChage} value={name}/>
            <input name="nickname" placeholder='닉네임' onChange={onChage} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
               {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;