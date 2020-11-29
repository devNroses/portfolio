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
                   <a href="">Instagram</a>
                   <a href="">LinkedIn</a>
                   <a href="">Twitter</a>
               </div>
            </div>
        </div>
    )
}

export default Header