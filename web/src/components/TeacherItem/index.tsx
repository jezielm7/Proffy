import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/54427491?s=460&u=bc29e0a8543b0c5888e593168b077daf3d1780e5&v=4" alt="Jeziel Marques" />
        <div>
          <strong>Jeziel Marques ⚛</strong>
          <span>Mobile Development</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de Desenvolvimento Móvel.
            <br /><br />
            Apaixonado pelo ecossistema de tecnologias de desenvolvimento móvel,
            sempre em busca de conhecimento para construir soluções através de apps.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 70,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;