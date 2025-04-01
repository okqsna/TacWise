import React from "react";
import HeaderUser from "../../components/header_user/header_user.jsx";
import "./first_aid_page.scss";
import products from "./data.json";
import Footer from '../../components/footer/footer.jsx';

class FirstAidPage extends React.Component {
  render() {
    return (
      <div className="FirstAidPage">
        <div className="FirstAidPage_header">
          <HeaderUser/>
        </div>
        <h2 className="FirstAidPage_cap">Чим наповнити <span>аптечку?</span></h2>
        <div className="FirstAidPage_content">
          <div className="FirstAidPage_content_col1">
            {products.products.filter(product => product.id % 2 !== 0).map((product) => (
              <div key={product.id} className="FirstAidPage_content_col1_product">
                <img src={`./pictures/aid${product.id}.png`}  alt={product.name} className="FirstAidPage_content_col1_product_img"/>
                <div className="FirstAidPage_content_col1_product_right">
                <a className="FirstAidPage_content_col1_product_caption" href={product.link}>{product.name}</a>
                <p className="FirstAidPage_content_col1_product_description">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="FirstAidPage_content_col2">
            {products.products.filter(product => product.id % 2 === 0).map((product) => (
            <div key={product.id} className="FirstAidPage_content_col2_product">
                <div className="FirstAidPage_content_col2_product_left">
                  <a className="FirstAidPage_content_col2_product_caption" href={product.link}>{product.name}</a>
                  <p className="FirstAidPage_content_col2_product_description">{product.description}</p>
                </div>
                <img src={`./pictures/aid${product.id}.png`} alt={product.name} className="FirstAidPage_content_col2_product_img"/>
            </div>
            ))}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default FirstAidPage;
