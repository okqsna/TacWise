import React, { useState, useEffect } from 'react';
import HeaderUser from '../../components/header_user/header_user.jsx';
import Footer from '../../components/footer/footer.jsx';
import ModuleCard from '../../components/module_card/module_card.jsx';
import { getUserByToken } from '../../services/userServices.js';
import { getModulesContent } from '../../services/moduleServices.js';
import { getModulesProgress }  from '../../services/userServices';
import { getStudyProgress } from '../../services/userServices.js';
import { getAvailableFlashcards } from '../../services/userServices.js';
import { getLastLearned } from '../../services/userServices.js';
import './dashboard.scss';

const Dashboard = () => {
    const token = sessionStorage.getItem('token');
    const [modulesData, setModulesData] = useState([]);
    const [loadingModules, setLoadingModules] = useState(true);
    const [isLoadingProgress, setIsLoadingProgress] = useState(true);
    const [errorModules, setErrorModules] = useState(false);
    const [progress, setProgress] = useState([]);
    const [modulesCount, setModulesCount] = useState(0);
    const [studyProgress, setStudyProgress] = useState(0);
    const [allModules, setAllModules] = useState(0);
    const [flashcardsAmount, setFlashcardsAmount] = useState([]);
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [streak, setStreak] = useState(0);
    const [activityStatus, setActivityStatus] = useState("expired");

    useEffect(() => {
    const fetchFlashcards = async () => {
        try {
        const response = await getAvailableFlashcards();
        setFlashcardsAmount(response.data);
        } catch (error) {
        console.error("Error:", error);
        }
    };
    fetchFlashcards();
    }, []);
   
    useEffect(() => {
        const checkProgress = async () => {
          try {
            const response = await getModulesProgress();
            setProgress(response.data);
          } catch (error) {
            console.error('Error:', error);
          } finally {
            setIsLoadingProgress(false);
          }
        };
        checkProgress();
      }, []);
    


    useEffect(() => {
        const checkStreak = async () => {
          const response = await getLastLearned();
            const data = response.data;
            setStreak(data.streak);
            setActivityStatus(data.status);
        };
        checkStreak();
      }, []);
    
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
    }, [token]);

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

    useEffect(() => {
        const checkStudyProgress = async () => {
            if (modulesData?.data) {
                const response = await getStudyProgress();
                const data = response.data;
                const modulesCounter = data.filter(p => p.progress_percent !== false).length;
                const allModules = modulesData.data.length;
                const learnedPercentage = allModules > 0 ? Math.round((modulesCounter / allModules) * 100) : 0;
    
                setModulesCount(modulesCounter);
                setAllModules(allModules);
                setStudyProgress(learnedPercentage);
            }
        };
        checkStudyProgress();
    }, [modulesData]);
    

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
                            </div>
                        </div>
                    
                        {!loadingModules && !errorModules &&(
                             <div className="Dashboard_content_left_main">
                                {!isLoadingProgress && modulesData.data.map((module, key) => {
                                    const moduleProgress = progress.find(p => p.module_name === module.name);
                                    const amountCards = flashcardsAmount.find(f => f.module_name === module.name);

                                    return (
                                        <ModuleCard 
                                        data={module} 
                                        progress={moduleProgress} 
                                        key={key} 
                                        cardAmount = {amountCards}
                                        />
                                    );
                                    })
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
                                        {streak} день
                                    </div>
                                    <p>підряд. Продовжуйте!</p>
                                </div>
                                <div className="stats_widget_modules">
                                    <p>Ви вивчили</p>
                                    <div className="stats_widget_modules_data">
                                        <div className="stats_widget_modules_data_img"></div>
                                        {modulesCount}/{modulesData.data.length}
                                    </div>
                                    <p>модулів. Це {studyProgress}% від усіх</p>
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