import React from "react";
import routeMain from "./routes";

import './styles.scss'

const Contacts = () => (
    <section className="contactsPage">
        <div className="info">
            <div className="phone">
                <a href="+79991234576">+7 (999) 123 45 76</a>
            </div>
            <div className="name">
                Ильдар <br/> Халилов
            </div>
            <div className="mail">
                <a href="mailto:jackiechn@yandex.ru">jackiechn@yandex.ru</a>
            </div>
            <div className="position">
                FrontEnd Developer
            </div>
            <div className="tech">
                HTML, CSS, JS
            </div>
        </div>
        <div className="image">
            
        </div>
    </section>
)

export {routeMain}

export default Contacts