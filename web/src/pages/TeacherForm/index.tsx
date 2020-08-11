import React from 'react';

import Header from '../../components/Header';

import './styles.css';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <Header
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher este formulário."
      />

      <main>
        <fieldset>
          <legend>Seus dados:</legend>

          <div className="input-block">
            <label htmlFor="name">Nome Completo</label>
            <input type="text" id="name" />
          </div>

          <div className="input-block">
            <label htmlFor="avatar">Avatar</label>
            <input type="text" id="avatar" />
          </div>

          <div className="input-block">
            <label htmlFor="whatsapp">WhatsApp</label>
            <input type="text" id="whatsapp" />
          </div>
        </fieldset>
      </main>
    </div>
  );
}

export default TeacherForm;