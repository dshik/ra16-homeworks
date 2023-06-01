export default function IconSwitch(props) {
    
    return (
      <>
        <div> 
            <div onClick={props.onSwitch}>
                <span >
                    {props.icon}
                </span>
            </div>
        </div>
      </>
    )
}