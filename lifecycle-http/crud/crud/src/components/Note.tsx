interface NoteProp {
    title: string;
  }
export default function Noute(props: NoteProp): JSX.Element  {

    return (
        <>
            <div>
                <p>{props.title}</p>
            </div>
        </>
    )
}