import { useState } from "react"


export function TwiterFollowCard ({ userName, name, initialIsFollowing}) {
    const [isFollowing, setFollowing] = useState(initialIsFollowing)


    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const color = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
      setFollowing(!isFollowing)
    }


    return (
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img 
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt={`El avatar de ${name}`} />
          <div className="tw-followCard-info">
            <strong>{name}</strong>
            <span className=".tw-followCard-infoUserName">@{userName}</span>
          </div>
        </header>
  
        <aside>
          <button className={color} onClick={handleClick}>
            <span className="tw-followCard-text">{text}</span>
            <span className="tw-followCard-stopFollow">Dejar de seguir</span>
            </button>
        </aside>
      </article>
    )
  }