let counter = 10;

export default function PullUpImpure() {

    counter ++;

    return(
        <p> counter : {counter}</p>
    )
}