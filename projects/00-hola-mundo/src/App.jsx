
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


export function App (){
    return (
        <section className='App'>
        <TwitterFollowCard 
            isfollowing 
            userName="abrahamjs" 
            name="Araham Julio Otero">
        </TwitterFollowCard>
        <TwitterFollowCard 
            isfollowing 
            userName="foca" 
            name="Boca juniors">

        </TwitterFollowCard>
        <TwitterFollowCard 
            isfollowing 
            userName="Pablo Hernandez" 
            name="pheralb">
        </TwitterFollowCard>
        </section>
    )
}