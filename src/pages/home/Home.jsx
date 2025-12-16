import Iconmed from '../../assets/icomed.png'
import Fotomed from '../../assets/medicovoluntario 1.png'
import S from  './home.module.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main>
      <section className={S.container}>

        <section className={S.box1}>

        <div className={S.boxsaude}>
          <img src={Iconmed} alt="Icone instrumento médico" />
          <h3>Saúde para todos</h3>
        </div>

        <h1>Saúde e cuidado sem barreiras</h1>
        <p>Um projeto dedicado a oferecer atendimento médico e odontológico gratuito para pessoas que mais precisam na nossa comunidade.</p>

        <div className={S.boxbtn}>

          <button className={S.btnvde}><Link to='/voluntario'>Seja Voluntário</Link></button>
          <button className={S.btnbco}>Como Ajudar</button>

        </div>      

        </section>
        <div className={S.boximg}>
          <img src={Fotomed} alt="Imagem de um medico voluntário" />
        </div>
      </section>

{/* construindo secoes utilizando a tecnica BEM  */}
<section className={S.missao}>
        <h2>Nossa Missão</h2>
        <p className={S.missao_text}>
          Transformar vidas através do acesso universal a saúde de qualidade
        </p>
        <div className={S.missao_cards}>
          <article className={S.missao_card}>
            <h3>Acesso Equitativo</h3>
            <p>
              Garantir que todos tenham acesso a cuidados de saúde de qualidade,
              independentemente de sua condição financeira.
            </p>
          </article>
          <article className={S.missao_card}>
            <h3>Acesso Equitativo</h3>
            <p>
              Garantir que todos tenham acesso a cuidados de saúde de qualidade,
              independentemente de sua condição financeira.
            </p>
          </article>
          <article className={S.missao_card}>
            <h3>Acesso Equitativo</h3>
            <p>
              Garantir que todos tenham acesso a cuidados de saúde de qualidade,
              independentemente de sua condição financeira.
            </p>
          </article>
        </div>
</section>

<section className={S.impacto}>
        <h2>Nosso Impacto</h2>
        <p className={S.impacto_text}>
          Transformando a saúde de nossa comunidade, um paciente de cada vez
        </p>
        <div className={S.impacto_cards}>
          <article className={S.impacto_card}>
            <h3>2,500+</h3>
            <p>Pessoas Atendidas</p>
          </article>
          <article className={S.impacto_card}>
            <h3>150+</h3>
            <p>Profissionais Voluntários</p>
          </article>
          <article className={S.impacto_card}>
            <h3>98%</h3>
            <p>Satisfação dos Pacientes</p>
          </article>
          <article className={S.impacto_card}>
            <h3>5+</h3>
            <p>Anos de Dedicação</p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default Home
