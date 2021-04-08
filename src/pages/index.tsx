import { CompletedChallenger } from '../Components/CompletedChallenger';
import { CountDown } from '../Components/CountDown';
import {ExprerienceBar} from '../Components/ExprerienceBar';

import { Profile } from '../Components/Profile';

import Head from 'next/head';

import style from '../styles/pages/Home.module.css';
import { ChallengeBox } from '../Components/ChallengeBox';

export default function Home() {
  return (
    <div className={style.container}>
      <Head >
        <title>Inicio | move.it</title>

      </Head>
      
      <ExprerienceBar />
      <section>
        <div>
        <Profile />
        <CompletedChallenger />
        <CountDown />
        </div>
        <div>
          <ChallengeBox />

        </div>

      </section>
    </div>
  )
}
