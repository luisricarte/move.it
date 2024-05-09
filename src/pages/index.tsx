import { ExperienceBar } from "@/components/ExperienceBar";
import { Profile } from "@/components/Profile";
import { CompletedChallenges } from "@/components/CompletedChallenges";
import { Countdown } from "@/components/Countdown";

import Head from "next/head";
import styles from '../styles/components/Home.module.css';
import { ChallengeBox } from "@/components/ChallengeBox";
import { CountdownProvider } from "@/contexts/CountdownContext";


export default function Home() {
    return(
        <div>
        <div className={styles.container}>    
            <Head>
                <title>Inicio | Move.it</title>
            </Head>

            <ExperienceBar/>

            <CountdownProvider>
                <section>
                    <div>
                        <Profile/>
                        <CompletedChallenges/>
                        <Countdown/>
                        
                    </div>
                    <div>
                        <ChallengeBox/>
                    </div>
                </section>
            </CountdownProvider>
        </div>

        
        </div>
    )
}