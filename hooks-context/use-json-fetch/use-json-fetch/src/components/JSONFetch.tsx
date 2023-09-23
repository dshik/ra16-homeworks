import useJsonFetch from "../hooks/UseJsonFetch";

interface PropsJSONFetch {
    url: string;
}

export default function JSONFetch (props: PropsJSONFetch): JSX.Element {
    const [ data, loading, error ] = useJsonFetch(props.url, "");

    return (
        <>
            <p>I in JSONFetch</p>
            <div>
                { loading ? (<div>Loading ...</div>) : ( null )}
                { error ? (<div>Loading error </div>) : ( null )}
                { !loading && !error ? (<div>Data: {data.status}</div>) : null }

            </div>
        </>
    );
}