import { ExperienceBar } from "@/components/ExperienceBar";
import { Profile } from "@/components/Profile";
import Head from "next/head";
import styles from '../styles/components/Home.module.css';
export default function Home() {
    return(
        <div className={styles.container}>    

            <ExperienceBar/>
            <section>
                <div>
                    <Profile/>
                </div>
                <div></div>
            </section>
        </div>
    
    )
}