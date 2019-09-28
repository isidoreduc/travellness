import React from "react"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import icons from "../constants/social-icons"
import { Link } from "gatsby"

const footer = () => {
  return (
    <footer className={styles.footer}>
      {/* the links */}
      <div className={styles.links}>
        {links.map((item, index) => (
          <Link key={index} to={item.link}>
            {item.text}
          </Link>
        ))}
      </div>
      {/* social media icons */}
      <div className={styles.icons}>
        {icons.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </div>
      <div className={styles.copyright}>
        &copy; travellness {new Date().getFullYear()} all righsts reserved
      </div>
    </footer>
  )
}

export default footer
