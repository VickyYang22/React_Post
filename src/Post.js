import React from "react";
import PorpTypes from "prop-types";

function Post({id , title,deletePost}){
return (
    <div className="Post">
        <button className="Post__delete" onClick={()=>deletePost(id)}>X</button>
        <div className="Post__title">{title}</div>
        <img className="Post__image" src={`https://source.unsplash.com/random?sig=${id}`} />
    </div>
)
}

Post.porpTypes ={
    id : PorpTypes.number.isRequired,
    title: PorpTypes.string.isRequired,
    deletePost:PorpTypes.func.isRequired
}

export default Post