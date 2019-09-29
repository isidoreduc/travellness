import React from "react"
import Title from "./title"
import styles from "../css/services.module.css"
import serv from "../constants/services"

const OurServices = () => {
  return (
    <section className={styles.services}>
      <Title firstWord="services" rest="we provide" />
      <div className={styles.center}>
        {serv.map((item, index) => (
          <article className={styles.service} key={index}>
            <span>{item.icon}</span>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default OurServices
