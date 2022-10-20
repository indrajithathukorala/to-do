import Mokada from "./mk";

const NoResult = ({ado, adomk}) => {
    return (
        <>
        <p>No results
            {ado}
        </p>
        <Mokada mk={adomk}/>
        </>
    )
}

export default NoResult;