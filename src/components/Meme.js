import React from 'react'
import ReactDOM from 'react-dom'

export default function Meme(){


    const [memeData, setMemeData] = React.useState({
        topText : "",
        bottomText : "",
        img : ""
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])


    function getMeme(){
        const randMeme = allMemes[Math.floor(Math.random() * allMemes.length)]
        setMemeData(prevMemeData => ({
            ...prevMemeData,
            img : randMeme.url
        }))
    }

    function inputChange(event){
        const {name, value} = event.target
        setMemeData(prevMemeData => (
            {
                ...prevMemeData,
                [name] : value
            }
        ))
    }
    const check = memeData.img == "" ? false : true

    return(
        <main>
            <div className="form">
                <input 
                    type="text"
                    value={memeData.topText}
                    onChange = {inputChange}
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                />
                <input 
                    type="text"
                    value={memeData.bottomText}
                    onChange = {inputChange}
                    placeholder="Bottom text"
                    className="form--input"
                    name='bottomText'
                />
                <button 
                    onClick = {getMeme}
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </div>
            {check && <div className="meme">
                <img src={memeData.img} className="meme--image" />
                <h2 className="meme--text top">{memeData.topText}</h2>
                <h2 className="meme--text bottom">{memeData.bottomText}</h2>
            </div>}
        </main>
    )
}