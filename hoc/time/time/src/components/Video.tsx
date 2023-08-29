import DateTimePretty from "./DateTimePretty";

export type VideoProp = {
    url: string;
    date: string;
  }

export default function Video(props: VideoProp): JSX.Element {
    return (
         <div className="video">
            <iframe src={props.url} allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}
