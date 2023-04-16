import './App.css'
import TwitterCardFollowing from './components/TwitterCardFollowing'

function App() {

  return (
    <section className={'cards'}>
    <TwitterCardFollowing userName={'adarista012'}>
        Antonio Arista
    </TwitterCardFollowing>
    <TwitterCardFollowing userName={'adarista012'}>
        Antonio Arista
    </TwitterCardFollowing>
    </section>
  )
}

export default App
