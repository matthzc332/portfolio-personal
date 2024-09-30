import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme} = useTheme();
    
    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
            className={styles.hero} src={heroImg} alt="foto de perfil de Matias Cabello"/>
            <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>
                Matias
                <br/>
                Cabello
            </h1>
            <h2>Full Stack Developer</h2>
            <span>
                <a href="https://github.com/matthzc332" target="_blank">
                    <img src={githubIcon} alt="GitHub icon"/>
                </a>
                <a href="https://linkedin.com/in/matias-cabello-36b1981b2" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon"/>
                </a>
            </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repellat</p>
            <a href={CV} download>
                <button className="hover" >
                    Curriculum Vitae
                </button>
            </a>
        </div>
    </section>
  );
}

export default Hero