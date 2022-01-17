import React, { useState } from 'react'

export default function Search() {
    const [img, setImg] = useState("")
    const [resultImg, setresultImg] = useState("")
    const inputEvent = (event) => {
        const data = event.target.value;

        const newImg = `https://source.unsplash.com/1600x900/?${data}`;
        setImg(data)
        setresultImg(newImg);
    }
    return (
        <>
            <div className="container search">

                <div>     <input type="text" placeholder="Search Anything"

                    value={img}
                    onChange={inputEvent}
                />
                </div>
                {img === "" ? <div className="img mt-5">
                   <h1>Search any Image here</h1>
                </div> : <div className="img">
                    <img src={resultImg} alt="" />
                </div>}

            </div>
        </>
    )
}
