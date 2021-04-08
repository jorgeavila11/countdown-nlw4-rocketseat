
import { useState, useEffect } from 'react';
import style from '../styles/components/CountDown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function CountDown(){
    
    const [time, setTime] = useState(0.1 * 60);
    const [active, setActive] = useState(false);
    const [finished, setFinished] = useState(false);

    const minutos = Math.floor(time / 60);
    const segundos = time % 60;

    const  [minuteLeft, minuteRight] = String(minutos).padStart(2, '0').split('');
    const  [secondLeft, secondRight] = String(segundos).padStart(2, '0').split('');

    function startcountDown(){
        setActive(true);
    }

    function resetcountDown(){
        clearTimeout(countdownTimeout);
        setActive(false);
        setTime(25 *60);
    }

    useEffect(() =>{
       if(active && time > 0){
        countdownTimeout = setTimeout(()=> {
               setTime(time -1);               
           }, 1000)           
       }else if (active && time === 0){
            setFinished(true);
            setActive(false);
            new Audio('/notification2.mp3').play();
       }
       
    }, [active, time] );

    return(
        <div>
            <div className={style.countDown}>                
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            {finished ?(
            <>
                <button 
                disabled                
                className={style.countDownButton} 
                
                >
                Ciclo encerrado           
                </button>
                <audio src="icons/notification.mp3" />                
            </>
             ) :(
                <div>
                    {active ? (
                    <button 
                        type="button" 
                        className={`${style.countDownButton} ${style.countDownButtonActive}`} 
                        onClick={resetcountDown}
                    >
                        Abandonar ciclo           
                    </button>
                ) : (
                    <button 
                        type="button" 
                        className={style.countDownButton} 
                        onClick={startcountDown}
                    >
                        Iniciar um ciclo            
                    </button>
                    )}
                </div>
             )}          
                
        </div>
    );
}