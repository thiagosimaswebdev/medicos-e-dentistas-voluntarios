import { Link } from 'react-router-dom'
import Logo from '../../assets/coracao.png'
import S from './footer.module.scss'
import Email from '../../assets/carta.png'
import Contato from '../../assets/contato.png'
import Local from '../../assets/local.png'

const Footer = () => {
  return (
    <footer>
     <section className={S.hero}>
      <div className={S.boxlogo}>
        <div className={S.boxlogotext}>
        <img src={Logo} alt="Logo do site coração verde" />
        <Link to='/'>Médicos & Dentistas</Link>          
        </div>
        <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
      </div>
      <div className={S.contat}>
        <h2>Contato</h2>
        <div className={S.divcontat}><img src={Email} alt="" /><p>contato@medico-dentista.org</p></div>
        <div className={S.divcontat}><img src={Contato} alt="" /><p>(11) 3000-0000</p></div>
        <div className={S.divcontat}><img src={Local} alt="" /><p>São Paulo, Brasil</p></div>
      </div>
      <div className={S.redeSocial}>
        <h2>Redes Sociais</h2>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>LinkedIn</p>
      </div>
     </section>
      <div className={S.direitos}>
        <p>© 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer;
