import React,{useState} from "react";
import PorpTypes from 'prop-types';

function Input({addPost}){
    const[input,setInput]=useState('');

    function onChange(event){
        setInput(event.target.value);
    }

    function onKeyDown(event){
        const title = event.target.value;

        if (event.key ==='Enter' && title){
            addPost(title);
            setInput('');
        }
    }

    return (
    <div className="Input">
        <div className="Input__header">Create Post</div>
        <input className="Input__field" type="text" value={input} onChange={onChange} onKeyDown={onKeyDown}/>
    </div>
    );
}

Input.PorpTypes={
    addPost:PorpTypes.func.isRequired
};

export default Input;