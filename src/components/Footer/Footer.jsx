import React from "react";
import FooterCss from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={FooterCss.footer}>
            <div className={FooterCss.content}>
                В дальнейшем планируется создание прогнозирования(бесплатного, по фану) на матчи.
                Лидеры прогнозов будут выводится в топе.
            </div>
            <div className={FooterCss.content}>
            Если, вдруг, у кого - то возникнет желание помочь проекту и пожертвовать денег на его развитие,
            то вот: <br/>
            моя карта: xxxx-xxxx-xxxx-xxxx,<br/>
            email: fa13-prognosis@gmail.com
            </div>
        </footer>
    )
}

export default Footer;
