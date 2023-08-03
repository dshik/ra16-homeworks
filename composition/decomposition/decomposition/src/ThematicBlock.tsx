interface ThematicBlockProp {
    title: string;
    titleRef: string;
    children?: any;
  }

export default function ThematicBlock(props: ThematicBlockProp): JSX.Element  {

    return (
        <>
            <div>
                <a href={props.titleRef}>{props.title}</a>
                {props.children}
            </div>
        </>
    )
}