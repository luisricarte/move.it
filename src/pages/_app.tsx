import '../styles/global.css'
import { challegensContext } from '../contexts/ChallengesContext';
function MyApp({ Component, pageProps}) {
    
    return(
        <>
        <challegensContext.Provider>
            <Component {...pageProps}/>
        </challegensContext.Provider>
        </>
    ) 
}

export default MyApp