import React, { useState } from 'react'
import { useEffect } from 'react';

const AllNote = () => {
    const [notes, setNotes] = useState("");
    useEffect(() => {
        fetch("https://cute-pink-bee-hose.cyclic.app/notes", {
            method: "GET",
            headers: {
                "Authorization": localStorage.getItem("token")
            },
        }).then(res => res.json()).then(res => {
            console.log(res)
            setNotes(res)
        }).catch(err => console.log(err));
    }, []);
  
    const deleteNode=(noteID)=>{
        fetch(`https://cute-pink-bee-hose.cyclic.app/delete/${noteID}`,{
            method:"DELETE",
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        })
    }


    return (
        <div>
            <h3>Notes Page</h3>
            {
                notes? notes.map((ele)=>{
                    return(
                        <>
                        <div >
                            <h3>Title : {ele.title}</h3>
                            <p>Note : {ele.note}</p>
                            <p>Category : {ele.category}</p>
                            <button onClick={()=>deleteNode(ele._id)}>Delete</button>
                            <button>Update</button>
                        </div>
                        </>
                    )
                }):<h1>Not Notes are there!😔</h1>
            }
        </div>
    );
}

export default AllNote
