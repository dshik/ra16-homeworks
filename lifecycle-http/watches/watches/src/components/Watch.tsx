
interface WatchProp {
    title: string;
    timeNow: Date;
    delta: number;
  }

export default function Watch(props: WatchProp): JSX.Element  {
    
    const hours = (props.timeNow.getHours() + props.delta - 3) % 24;
    const minutes = props.timeNow.getMinutes();
    const seconds = props.timeNow.getSeconds();

    const strHours = (hours > 9 ? String(hours) : "0" + String(hours))
    const strMinutes = (minutes > 9 ? String(minutes) : "0" + String(minutes))
    const strSeconds = (seconds > 9 ? String(seconds) : "0" + String(seconds))
    
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