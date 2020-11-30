import styles from './header.module.scss'

function Header(){
    return (
        <div className={styles.header__wrapper}>
            <div className={styles.header__title}>
                <h1>Jon Selby</h1>
                <span className={styles.header__title_location}>Phoenix, Arizona</span>
                <span>Full Stack Developer</span>
                <span className={styles.header__title_design}>
                    Ui/UX Design Skills (Shhhhhh!)
                    </span>
            </div>
            <div className={styles.header__footer}>
               <a>Work</a>
               <a>About</a>
               <a>Services</a>
               <a>Contact</a>

               <div className={styles.header__social}>
                   <a href="https://www.linkedin.com/in/jonathan-selby-developer/" target="_blank" rel="noopener">LinkedIn</a>
                   <a href="https://www.instagram.com/jonselbyco_/" target="_blank" rel="noopener">Instagram</a>
                   <a href="https://twitter.com/jonselbygfx_" target="_blank" rel="noopener">Twitter</a>
               </div>
            </div>
        </div>
    )
}

export default Header