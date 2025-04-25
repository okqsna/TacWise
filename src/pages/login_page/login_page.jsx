import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import LoginForm from "../../components/login/login";
import "./login_page.scss";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-page-header">
        <Header aboutLink={false}/>
      </div>
      <LoginForm />
      <Footer/>
    </div>
  );
};

export default LoginPage;