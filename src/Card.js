import React from 'react';

const Card = ({name, email , id}) => {
    
    // const Card = (props) => {
    //     const {name, email , id} = props;thats or
return (

<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
    <img src={`https://robohash.org/${id}?200x200`} alt='Janes Doe' />
    <div>
        <h2>J{name}</h2>
        <p>{email}</p>
    </div>


</div>


);

}


export default Card;