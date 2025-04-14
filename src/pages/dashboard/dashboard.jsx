import React, { useState, useEffect } from 'react';
import HeaderUser from '../../components/header_user/header_user.jsx';
import Footer from '../../components/footer/footer.jsx';
import ModuleCard from '../../components/module_card/module_card.jsx';
import { getUserByToken } from '../../services/userServices.js';
import { getModulesContent } from '../../services/moduleServices.js';
import './dashboard.scss';

const Dashboard = () => {
    const token = sessionStorage.getItem('token');

    const [modulesData, setModulesData] = useState([]);
    const [loadingModules, setLoadingModules] = useState(true);
    const [errorModules, setErrorModules] = useState(false);

    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await getUserByToken(token);
            setUserData(data.data || {});
            setError(false);
        } catch (error) {
            console.error('Received an error:', error);
            setError(true);
        } finally {
            setLoading(false);
        }
        };
        fetchData();
    }, []);

    useEffect(() => {  
        const fetchModulesData = async () =>{
            try{
                const data = await getModulesContent();
                setModulesData(data);
                setErrorModules(false);
            } catch (error){
                console.error('Received an error:', error);
                setErrorModules(true);
            } finally {
                setLoadingModules(false);
            }
        };
        fetchModulesData();
    }, []);
    

    return(
        <div className="Dashboard">
            <div className="Dashboard_header">
                <HeaderUser/>
            </div>
            {loading &&
            <div className="Dashboard_message">
                <p className="Dashboard_message_txt">
                Завантажуємо інформацію...
                </p>
            </div>}
            {error &&
            <div className="Dashboard_error_message">
                <p className="Dashboard_error_message_txt">
                Щось пішло не так... Люди у фіолетових футболках вже виправляють цю проблему!
                </p>
                </div>}
            {!loading && !error && (
                <div className="Dashboard_content">
                    <div className="Dashboard_content_left">
                        {/* navigation and modules  */}
                        <div className="Dashboard_content_left_top">
                            <div className="Dashboard_content_left_top_congrats">
                                <p>Вітаємо, </p>
                                <span id="#username"> {userData['first name']}!</span>
                            </div>
                            <div className="Dashboard_content_left_top_modules">
                                <div className="Dashboard_content_left_top_modules_logo">
                                    <div className="Dashboard_content_left_top_modules_logo_img"></div>
                                    <p className="Dashboard_content_left_top_modules_logo_txt">Ваші модулі</p>
                                </div>
                                {/* <div className="Dashboard_content_left_top_modules_navigation">
                                    <div className="Dashboard_content_left_top_modules_btn_1"> Наявні </div>
                                    <div className="Dashboard_content_left_top_modules_btn_2"> Вивчені </div>
                                    <div className="Dashboard_content_left_top_modules_btn_3"> Усі </div>
                                </div> */}
                            </div>
                        </div>
                    
                        {!loadingModules && !errorModules &&(
                             <div className="Dashboard_content_left_main">
                                {
                                    modulesData.data.map((module, key) => (
                                        <ModuleCard data = {module} key={key}/>
                                    ))
                                }
                         </div>
                        )}                        
                    </div>
                    {/* user widget, data (streaks etc) */}
                    <div className="Dashboard_content_right">
                        <div className="Dashboard_content_right_widget">
                            <div className="user_data_widget">
                                <p className="user_data_widget_name">
                                    {userData['first name']} <br /> {userData['last name']}
                                </p>
                                <p className="user_data_widget_about">
                                    {userData['about']}
                                </p>
                            </div>
                            <div className="stats_widgets">
                                <div className="stats_widget_days">
                                    <p>Ви навчаєтесь вже</p>
                                    <div className="stats_widget_days_data">
                                        <div className="stats_widget_days_data_img"></div>
                                        
                                    </div>
                                    <p>Ви крутіший ніж 59% користувачів</p>
                                </div>
                                <div className="stats_widget_modules">
                                    <p>Ви вивчили вже</p>
                                    <div className="stats_widget_modules_data">
                                        <div className="stats_widget_modules_data_img"></div>
                                        
                                    </div>
                                    <p>модулів. Це 8% від усіх</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
            {/* footer */}
            <Footer/>
        </div>
    )
};

export default Dashboard;