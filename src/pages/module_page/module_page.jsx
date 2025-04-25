import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './module_page.scss';
import Header from '../../components/header_user/header_user.jsx';
import Footer from '../../components/footer/footer.jsx';
import { Link } from 'react-router-dom';

const ModulePage = () =>{
    const location = useLocation();
    const { data, cards } = location.state || {};
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
                        <p>Назад </p></a>
                    <div className="ModulePage_main_top_txt">
                        <h3 className="ModulePage_main_top_txt_h3">{data.name}</h3>
                        <p className="ModulePage_main_top_txt_p">{data.description}</p>
                    </div>
                </div>
                <div className="ModulePage_main_content">
                    <div className="ModulePage_main_content_top" onClick={handleToggleMaterials}> Матеріали </div>
                    {
                        isVisibleMaterials && (
                            <div className="ModulePage_main_content_materials">
                                <h2> Перелік матеріалів до теми </h2>
                                <a className='ModulePage_main_content_materials_notes' href={`${data.notes_tacwise}`}> Конспект від TacWise</a>
                                <h4> Інші джерела</h4>
                                <div className="ModulePage_main_content_materials_links">
                                {data.links.map((link, index) => {
                                        const [name, url] = Object.entries(link)[0];
                                        return (
                                            <a
                                            key={index}
                                            className="ModulePage_main_content_materials_link"
                                            href={url}
                                            >
                                            - {name}
                                            </a>
                                        );
                                        })}
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
                                    {
                                        data.videos.map((video, index) => {
                                            const [name, url] = Object.entries(video)[0];
                                            return(
                                                <a 
                                                key = {index}
                                                href = {url}
                                                className="ModulePage_main_content_lectures_link">
                                                - {name}
                                                </a>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }
                    <div className="ModulePage_main_content_top" onClick={handleToggleCards}> Картки</div>
                    {
                        isVisibleCards && (
                            <div className="ModulePage_main_content_cards">
                                <h2>Флеш-картки для активного вивчення</h2>
                                <Link to={`/flashcards/${data.id}`} state={{data: data, cards: cards}}>Переходь за посиланням та навчайся!</Link>
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