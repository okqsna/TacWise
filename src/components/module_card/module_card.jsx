import './module_card.scss';


// prototype of card used in Dashboard and Module page
const ModuleCard = () =>{
    return(
        <div className="ModuleCard">
            <div className="ModuleCard_txt">
                <h3>MARCH</h3>
                <p>
                Модуль спрямований на поетапне вивчення фіксованого алгоритму дій для 
                роботи з пораненим у безпечній зоні, який передбачає порятунок життя 
                людини, якій вже надали першу допомогу в червоній зоні.
                </p>
            </div>
            <div className="ModuleCard_tags">
                <div className="ModuleCard_tag">
                    алгоритми
                </div>
            </div>
            <div className="ModuleCard_progress">
                <p className="ModuleCard_progress_cap">
                    Прогрес
                </p>
                <div className="ModuleCard_progress_visuals">
                    <p className="ModuleCard_progress_visuals_p">50%</p>
                </div>
            </div>
        </div>
    )
}
export default ModuleCard;