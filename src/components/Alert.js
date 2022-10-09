import React from 'react'

export default function Alert(props) {

    const capitalize = (word)=>{
        let newWord = word.toUpperCase();
        return newWord.charAt(0)+word.slice(1);
    }
    return (
        <div style={{height:'80px'}}>
            {props.alert && 
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}!!</strong> {props.alert.msg}
            </div>}
        </div>
    )
}
