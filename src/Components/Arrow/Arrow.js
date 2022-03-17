import './Arrow.css';

function Arrow(props) {
    function handleClick(e) {
        props.getNewCard(e.target.textContent)
    }
    const prevSVG = ''

    return (
        <div className={'Arrow ' + props.dir} onClick={handleClick} title={props.dir}>
            <svg fill='none' stroke='#0E1A27' stroke-width='12' stroke-dashoffset='0' stroke-dasharray='0' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polyline fill="none" points="90,10 50,50 90,90 "/>
            <polyline fill="none" points="60,10 20,50 60,90 "/></svg>
        </div>
    )
}

export default Arrow;