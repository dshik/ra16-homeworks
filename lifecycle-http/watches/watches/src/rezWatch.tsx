
interface WatchProp {
    title: string;
    timeNow: Date;
    delta: number;
  }

export default function Watch(props: WatchProp): JSX.Element  {
    
    const hours = (props.timeNow.getHours() + props.delta - 3) % 24;
    const minutes = props.timeNow.getMinutes();
    const seconds = props.timeNow.getSeconds();

    let strHours = String(hours)
    if (hours < 10) { 
        strHours = "0" + strHours
    }
    
    let strMinutes = String(minutes)
    if (minutes < 10) { 
        strMinutes = "0" + strMinutes
    }

    let strSeconds = String(seconds)
    if (seconds < 10) { 
        strSeconds = "0" + strSeconds
    }

    const timeString = strHours + ":" + strMinutes+ ":" + strSeconds;

    return (
        <>
            <div>
                <p>{props.title}</p>
                <p>{timeString}</p>
            </div>
        </>
    )
}