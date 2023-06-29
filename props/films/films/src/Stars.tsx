import Star from './Star.tsx';

interface StarsProp {
  count: number;
}

export default function Stars(props: StarsProp) {
  if (typeof props.count === "number") {} else {
    return null
  }

  if (props.count < 1 || props.count > 5) { return null}
  
  const arr = []
  
  for (let i = 0; i < props.count; i++) {
    arr.push(<Star />);
  }

  return (
    <>
      <div> 
        <div>
          <h1>I in Stars</h1>
          <h2>Ratio {props.count}</h2>
          <ul className="card-body-stars u-clearfix">
            {arr.map(elem => (
                <li>{elem}</li>
              ))}
          </ul>
        </div>
      </div>
    </>
  )
}
