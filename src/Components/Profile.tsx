import style from '../styles/Components/Profile.module.css';

export function Profile(){
    return(
        <div className={style.profileContainer}>
            <img src="https://github.com/jorgeavila11.png" alt="Jorge Ávila" />
            <div> 
            <strong>Jorge Ávila</strong>
            <p>
                <img src="icons/level.svg" alt="Level" />
                Level 1
            </p>
            </div>
        </div>
    );
}