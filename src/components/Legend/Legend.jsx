import './Legend.css'

export default function Legend({caption}) {
    return (
        <div className={'my-legend'}>
            <div className={'legend-title'}>{caption}</div>
            <div className={'legend-scale'}>
                <ul className={'legend-labels'}>
                    <li><span style={{background: "#54c204"}}></span>- The initial bottom layer</li>
                    <li><span style={{background: "#f9d808"}}></span>- Blind pass road on the middle layer</li>
                    <li><span style={{background: "#fc0404"}}></span>- Bottlenecks on the top layer</li>
                </ul>
            </div>
            <div className={'legend-source'}>
                Source:&nbsp;
                <a href={"https://docs.3liz.org/QuickOSM/"} style={{outline: "none"}}>
                    OSM data downloaded by QuickOSM plugin
                </a>
            </div>
        </div>
    );
}
