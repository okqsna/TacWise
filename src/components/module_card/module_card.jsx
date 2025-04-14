import './module_card.scss';
import { Link } from 'react-router-dom';

// prototype of card used in Dashboard and Module page
const ModuleCard = ({data}) =>{
    return(
        <Link to={`/module/${data.name}`} className="ModuleCard" state={{data}}>
            <div className="ModuleCard_txt">
                <h3 className="ModuleCard_txt_h3">{data.name}</h3>
                <p className="ModuleCard_txt_p">
                {data.description}
                </p>
            </div>
            <div className="ModuleCard_tags">
                {data.tags.map((tag, key)=>
                    <div className="ModuleCard_tag" key={key}>
                        {tag}
                    </div>
                )}
            </div>
            <div className="ModuleCard_progress">
                <p className="ModuleCard_progress_cap">
                    Прогрес
                </p>
                <div className="ModuleCard_progress_visuals">
                    <p className="ModuleCard_progress_visuals_p">0%</p>
                </div>
            </div>
        </Link>
    )
}
export default ModuleCard;