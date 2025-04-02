import React, { useState, useEffect } from 'react';
import HeaderUser from '../../components/header_user/header_user.jsx';
import Footer from '../../components/footer/footer.jsx';
import './first_aid_page.scss';
import { getAidContent } from '../../services/aidServices.js';

const FirstAidPage = () => {
  const [aidProducts, setAidProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const aidContent = await getAidContent();
        setAidProducts(aidContent.data || []);
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

  return (
    <div className="FirstAidPage">
      <div className="FirstAidPage_header">
        <HeaderUser />
      </div>

      <h2 className="FirstAidPage_cap">Чим наповнити <span>аптечку?</span></h2>
      {loading &&
       <div className="FirstAidPage_message">
        <p className="FirstAidPage_message_txt">
          Завантажуємо аптечку...
        </p>
       </div>}
      {error &&
       <div className="FirstAidPage_error_message">
        <p className="FirstAidPage_error_message_txt">
        Щось пішло не так... Люди у фіолетових футболках вже виправляють цю проблему!
        </p>
       </div>}
      {!loading && !error && (
        <div className="FirstAidPage_content">
          <div className="FirstAidPage_content_col1">
            {aidProducts.filter(product => product.id % 2 !== 0).map((product) => (
              <div key={product.id} className="FirstAidPage_content_col1_product">
                <img src={`./pictures/aid${product.id}.png`} alt={product.name} className="FirstAidPage_content_col1_product_img" />
                <div className="FirstAidPage_content_col1_product_right">
                  <a className="FirstAidPage_content_col1_product_caption" href={product.link}>{product.name}</a>
                  <p className="FirstAidPage_content_col1_product_description">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="FirstAidPage_content_col2">
            {aidProducts.filter(product => product.id % 2 === 0).map((product) => (
              <div key={product.id} className="FirstAidPage_content_col2_product">
                <div className="FirstAidPage_content_col2_product_left">
                  <a className="FirstAidPage_content_col2_product_caption" href={product.link}>{product.name}</a>
                  <p className="FirstAidPage_content_col2_product_description">{product.description}</p>
                </div>
                <img src={`./pictures/aid${product.id}.png`} alt={product.name} className="FirstAidPage_content_col2_product_img" />
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default FirstAidPage;
