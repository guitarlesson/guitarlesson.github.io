import './App.css';
import { Parallax } from 'react-parallax';
import Guitar from './images/Guitar.jpg';
import Guitar2 from './images/Guitar2.jpg';
import Guitar3 from './images/Guitar3.jpg';
import { Suspense } from 'react';
import { useTranslation} from 'react-i18next';
import Card from 'react-bootstrap/Card';



function App(){

  const { t, i18n } = useTranslation();

  const locales = {
    am: { title: 'Հայ' },
    en: { title: 'Eng' },
    ru: { title: 'Рус' },
  };

  function ScrollToHelp() {
    document.getElementById("xch").scrollIntoView({block: "center", behavior: "smooth", inline: "center"});
  }
  
  function ScrollToAbout() {
    document.getElementById("content2").scrollIntoView({block: "center", behavior: "smooth", inline: "center"});
  }

  return (
    <div className="App">
     
     <Parallax strength={150} bgImage={Guitar}>
     <h1 className='main_h1'>{t("main.header")}</h1>
     <ul>
        {Object.keys(locales).map((locale) => (
          <li key={locale}><button className='local' style={{ fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(locale)}>
            {locales[locale].title}
          </button></li>
        ))}
      </ul>
        <div className='content'>
          <div className='text-content'>{t("main.text")}</div>
         <button onClick={ScrollToAbout} className='about-button'>{t("main.about-btn")}</button>
         <button onClick={ScrollToHelp} className='about-button2'>{t("main.contact-text")}</button>
            <div className='quotes'>{t("main.quote")}</div>
        </div>
     </Parallax>
     <Parallax strength={-100}  bgImage={Guitar2}>
     <div className='content2' id='content2'>
      <h1 className='main_h1'>{t("main.about-h1")}</h1>
      <Card className='card' style={{ width: '18rem', border: "1px solid black",  }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title className='name'>{t("main.about-name")}</Card.Title>
        <Card.Text>
          {t("main.about-text")}
        </Card.Text>
      </Card.Body>
      </Card>
         <p></p>

        </div>
     </Parallax>
     <Parallax strength={100} bgImage={Guitar3}>
     <div className='content3' id='xch'>
      <form action="https://formsubmit.co/eriktonoyan827@gmail.com" method="POST">
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://guitarlessons.netlify.app"></input>
      <h1>{t("main.contact-h1")}</h1>
        <input type='text' name="name" placeholder={t("main.input-name")} />
        <input type='email' name='email' placeholder={t("main.input-name2")} required/>
        <textarea id="message" name="message" placeholder={t("main.input-name3")} maxlength="150" data-rows="1" tabindex="0" aria-label="Ձեր պատասխանը" required></textarea>
       <input id='send' type='submit' value={t("main.submit-button")}/>
      </form>
          <footer>
            <a href='https://www.instagram.com/narek_sargsyan_444/' target='_blank' rel='noreferrer'><i className='bi bi-instagram'/></a>
          <p>All rights reserved 2023®</p>
          </footer>
        </div>
     </Parallax>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  )
}


