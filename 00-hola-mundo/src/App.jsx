import './App.css'
import { TwiterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'd',
    name: 'deisi Verne',
    isFollowing: false
  },
  {
    userName: 'T',
    name: 'Mary Shelley',
    isFollowing: false
  },
  {
    userName: 'midudev',
    name: 'H.P. Lovecraft',
    isFollowing: false
  }
]

export function App() {
  return(
    <>
    <section className='App'>
      {
        users.map(user => {
          const { userName, name, isFollowing } = user
          return (
            <TwiterFollowCard
              key={userName}
              userName={userName}
              name={name}
              initialIsFollowing={isFollowing}
            />
          )
        })
      }
    </section>
    
    </>
  )
}

