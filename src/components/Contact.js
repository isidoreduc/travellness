import React from 'react';
import Title from './title';
import style from '../css/contact.module.css';

const Contact = () => {
  return (
    <section className={style.contact}>
      <Title title="Contact" subtitle="us" />
      <div className={style.center}>
        <form className={style.form} action="">
          <input
            type="text"
            name="name"
            id="name"
            className={style.formControl}
            placeholder="Johnny Bravo"
          />
          <input
            type="text"
            name="email"
            id="email"
            className={style.formControl}
            placeholder="jb@cn.hi"
          />
          <textarea
            name="message"
            id="message"
            rows="10"
            className={style.formControl}
            placeholder="Write something nice"
          />
          <button type="submit" className={style.submit}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
