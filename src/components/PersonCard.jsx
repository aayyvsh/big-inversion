import React from 'react';

const PersonCard = props => {
    return(
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <h3>age: {props.age}</h3>
            <p>haircolor: {props.hairColor}</p>
        </div>
    );
}

export default PersonCard;