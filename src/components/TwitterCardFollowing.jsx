import React, { useState }from 'react'

function TwitterCardFollowing({ children, userName }) {
    let [isFollowing, setIsFollowing] = useState(false)
    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing 
    ? 'tw-follow-card-button is-following'
    : 'tw-follow-card-button'
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
  return (
    <article className={'tw-follow-card'}>
      <header className={'tw-follow-card-header'}>
        <img className={'tw-follow-card-avatar'} alt={'avatar'} src={'https://media.licdn.com/dms/image/C4D03AQElsr9q6UFdQg/profile-displayphoto-shrink_800_800/0/1608954768211?e=2147483647&v=beta&t=eLhJIZdr3Egf5czIPsus46D2SThwSQkqY8ZbmCUj2TY'}/>
        <div className={'tw-follow-card-info'}>
          <strong>{ children }</strong>
          <span className={'tw-follow-card-info-userName'}>{`@${ userName }`}</span>
        </div>
      </header>
      <aside>
        <button
         className={ buttonClassName }
         onClick={ handleClick }
        >
        { text }
        </button>
      </aside>
    </article>
  )
}

export default TwitterCardFollowing
