import { ExperienceBar } from "@/components/ExperienceBar";
import { Profile } from "@/components/Profile";
import { CompletedChallenges } from "@/components/CompletedChallenges";
import { Countdown } from "@/components/Countdown";
import {GetServerSideProps} from 'next';
import Head from "next/head";
import styles from '../styles/components/Home.module.css';
import { ChallengeBox } from "@/components/ChallengeBox";
import { CountdownProvider } from "@/contexts/CountdownContext";
import { ChallengesProvider } from "@/contexts/ChallengesContext";

interface HomeProps{
    level: number,
    currentExperience: number,
    challengesCompleted: number,
}

export default function Home(props: HomeProps) {
    return(
        <ChallengesProvider 
            level={props.level} 
            currentExperience={props.currentExperience} 
            challengesCompleted={props.challengesCompleted}
        >
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
        </ChallengesProvider>
    )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const {level, currentExperience, challengesCompleted } = ctx.req.cookies;

    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted)
        }
    }
}