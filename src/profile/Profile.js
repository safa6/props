import React from 'react'
import PropTypes from 'prop-types'


const Profile = props => {
    const handelname=(name) => alert (`My name is ${name}`)
    return (
        <div>
            
            <h1 style={{color:"red" }}>Fullname : {props.name}</h1>
            <h1>Profession :{props.Profession}</h1>
            <h1>Bio :{props.bio} </h1>
            <image >{props.children}</image>
            <button onClick={()=>handelname(props.name)}>ClickMe</button>
            
        </div>
    )
}

Profile.propTypes = {
    name: PropTypes.string
  };

export default Profile
