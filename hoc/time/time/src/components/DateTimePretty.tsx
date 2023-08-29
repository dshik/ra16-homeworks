import DateTime from "./DateTime";

interface DateTimePrettyProp {
    date: string;
  }

  function convertDateToComent(strDate: string) {
    const now: any = new Date();
    const videoDate = Date.parse(strDate);
    const delta = now - videoDate;

    if (delta < 60*60*1000) {
      return "12 минут назад";
    }

    if (delta < 24*60*60*1000) {
      return "5 часов назад";
    }

    return "Больше суток";
}

export default function DateTimePretty(props: DateTimePrettyProp): JSX.Element {
    return (
        <>
            <DateTime date={convertDateToComent(props.date)} />
        </>
    )
}