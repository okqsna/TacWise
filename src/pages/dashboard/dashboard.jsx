import React, { useState, useEffect } from 'react';
import HeaderUser from '../../components/header_user/header_user.jsx';
import Footer from '../../components/footer/footer.jsx';

import './dashboard.scss';

const Dashboard = () =>{
    return(
        <div className="Dashboard">
            <div className="Dashboard_header">
                <HeaderUser/>
            </div>
            <div className="Dashboard_content">
                <div className="Dashboard_content_left">
                    <div className="Dashboard_content_left_top">
                        <div className="Dashboard_content_left_top_congrats">
                                <p>Вітаємо, </p>
                                <span id="#username"> Джонні!</span>
                        </div>
                        <div className="Dashboard_content_left_top_modules">
                            <div className="Dashboard_content_left_top_modules_logo">
                                <div className="Dashboard_content_left_top_modules_logo_img"></div>
                                <p className="Dashboard_content_left_top_modules_logo_txt">Ваші модулі</p>
                            </div>
                            <div className="Dashboard_content_left_top_modules_navigation">
                                <div className="Dashboard_content_left_top_modules_btn_1"> Наявні </div>
                                <div className="Dashboard_content_left_top_modules_btn_2"> Вивчені </div>
                                <div className="Dashboard_content_left_top_modules_btn_3"> Усі </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Dashboard_content_right">
                    <div className="Dashboard_content_right_widget">
                        <div className="user_data_widget">
                            <p className="user_data_widget_name">
                                Джонні <br/> Депп
                            </p>
                            <p className="user_data_widget_about">
                                🏴‍☠️ Пірат карибського моря
                            </p>
                        </div>
                        <div className="stats_widgets">
                            <div className="stats_widget_days">
                                <p>Ви навчаєтесь вже</p>
                                <div className="stats_widget_days_data">
                                    <div className="stats_widget_days_data_img"></div>
                                    53 дні
                                </div>
                                <p>Ви крутіший ніж 59% користувачів</p>
                            </div>
                            <div className="stats_widget_modules">
                                <p>Ви вивчили вже</p>
                                <div className="stats_widget_modules_data">
                                    <div className="stats_widget_modules_data_img"></div>
                                    1/12
                                </div>
                                <p>модулів. Це 8% від усіх</p>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            <Footer/>
        </div>
    )
};

export default Dashboard;