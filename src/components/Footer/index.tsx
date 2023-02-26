import React from "react";
import './styles.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        Новостник 
        <div className="small">Single Page Application</div>
      </div>
      <div className="small">Дипломный проект</div>
      <div> 
        <div className="small">Made by</div> 
        Иван Петров
      </div>
    </footer>
  );
}

export default Footer;