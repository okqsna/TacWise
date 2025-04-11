import React, { useState } from 'react';
import './module_page.scss';
import Header from '../../components/header_user/header_user.jsx'
import Footer from '../../components/footer/footer.jsx'

const ModulePage = () =>{
    const [isVisibleMaterials, setIsVisibleMaterials] = useState(false);
    const [isVisibleLectures, setIsVisibleLectures] = useState(false);
    const [isVisibleCards, setIsVisibleCards] = useState(false);

    const handleToggleMaterials = () => {
        setIsVisibleMaterials(!isVisibleMaterials);
    };
    const handleToggleLectures = () => {
        setIsVisibleLectures(!isVisibleLectures);
    };
    const handleToggleCards = () => {
        setIsVisibleCards(!isVisibleCards);
    };
    return(
        <div className="ModulePage">
            <div className="ModulePage_header">
                <Header/>
            </div>
            <main>
                <div className="ModulePage_main_top">
                    <a className="ModulePage_main_top_btn" href="/"> 
                        <div className="ModulePage_main_top_btn_img"></div>
                        Назад </a>
                    <div className="ModulePage_main_top_txt">
                        <h3>Тактична медицина</h3>
                        <p>Цей розділ дає базове поняття про те, що вивчає розділ тактичної медицини.</p>
                    </div>
                </div>
                <div className="ModulePage_main_content">
                    <div className="ModulePage_main_content_top" onClick={handleToggleMaterials}> Матеріали </div>
                    {
                        isVisibleMaterials && (
                            <div className="ModulePage_main_content_materials">
                                <h2> Перелік матеріалів до теми </h2>
                                <h4> Конспект від TacWise</h4>
                                <a className='ModulePage_main_content_materials_notes'> - link </a>
                                <h4> Інші джерела</h4>
                                <div className="ModulePage_main_content_materials_links">
                                    <a className="ModulePage_main_content_materials_link">
                                         - НМУ Богомольця
                                    </a>
                                </div>
                            </div>
                        )
                    }
                    <div className="ModulePage_main_content_top" onClick={handleToggleLectures}> Лекції </div>
                    {
                        isVisibleLectures && (
                            <div className="ModulePage_main_content_lectures">
                                <h2>Перелік відео-лекцій до теми</h2>
                                <div className="ModulePage_main_content_lectures_links">
                                    <a className="ModulePage_main_content_lectures_link">
                                         - Лекція 1
                                    </a>
                                </div>
                            </div>
                        )
                    }
                    <div className="ModulePage_main_content_top" onClick={handleToggleCards}> Картки</div>
                    {
                        isVisibleCards && (
                            <div className="ModulePage_main_content_cards">
                                <h2>Флеш-картки для активного вивчення</h2>
                                <a>Переходь за посиланням та навчайся!</a>
                            </div>
                        )
                    }
                </div>
            </main>
            <Footer/>
        </div>
    );
}
export default ModulePage;