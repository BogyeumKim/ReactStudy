import React , {useSta, useState} from 'react';

function InputSample(){
    const [text, setText] = useState('');
    const onChage = (e) => {
        // console.log(e.target.value); // 이벤트가발생한곳의 돔
        setText(e.target.value);
    }

    const onReset = () =>{
        setText('');
    }
    return(

        <div>
            <input onChange={onChage} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {text}
            </div>
        </div>
    )
}

export default InputSample;