import React , { useState , useRef} from 'react';

function InputSample(){
    const [inPuts, setInputs] = useState({
        name: '',
        nickname : '', 
    });

    const nameInput = useRef();

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
        nameInput.current.focus();
    }
    return(

        <div>
            <input name="name" 
            placeholder='이름'
             onChange={onChage} 
             value={name}
             ref={nameInput} />
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