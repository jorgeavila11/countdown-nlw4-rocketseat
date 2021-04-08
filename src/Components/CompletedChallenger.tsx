import { render } from "react-dom";

import style from '../styles/components/CompletedChallenger.module.css';

export function CompletedChallenger(){
    return(
        <div className={style.completedChallenger}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    );
}