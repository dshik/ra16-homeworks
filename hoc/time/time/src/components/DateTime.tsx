interface DateTimeProp {
    date: string;
  }

export default function DateTime(props: DateTimeProp): JSX.Element {
    return (
        <p className="date">{props.date}</p>
    )
}