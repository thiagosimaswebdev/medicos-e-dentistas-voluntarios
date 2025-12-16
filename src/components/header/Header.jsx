import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../../assets/coracao.png'
import S from './header.module.scss'

const Header = () => {
  // Estado que controla se o menu está aberto ou fechado
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className={S.header}>
      {/* Logo + nome */}
      <div className={S.boxLogo}>
        <img src={Logo} alt="Logo do site coração verde" />
        <Link to='/'>Médicos & Dentistas</Link>
      </div>

      {/* Botão menu hambúrguer (só aparece no mobile) */}
      <button
        className={S.menuToggle}
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label="Abrir menu"
      >
        ☰
      </button>

      {/* Menu de navegação */}
      <nav className={`${S.nav} ${menuAberto ? S.ativo : ''}`}>
        <Link to='/' onClick={() => setMenuAberto(false)}>Home</Link>
        <Link to='/voluntario' onClick={() => setMenuAberto(false)}>
          Seja Voluntário
        </Link>
      </nav>
    </header>
  )
}

export default Header
