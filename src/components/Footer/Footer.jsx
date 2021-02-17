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
            приватбанк: 5168-7427-0620-7366,<br/>
            альфабанк: 5355-5712-5227-9047,<br/>
            email: admin@fa13-prognosis.com.ua
            </div>
        </footer>
    )
}

export default Footer;
