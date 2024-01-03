import { useState } from "react"
export function TwitterFollowCard( {userName, name} ) {
    const [isfollowing, setIsfollowing] = useState(false)



    const text = isfollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isfollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () =>{
        setIsfollowing(!isfollowing)
    }

    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
                className='tw-followCard-avatar'
                alt="el avatar de midudev" 
                src={`https://unavatar.io/dribbble/${userName}`}/>
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
               <span className='tw-followCard-text'>{text}</span>
               <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>
        </aside>
       </article>
    )
}