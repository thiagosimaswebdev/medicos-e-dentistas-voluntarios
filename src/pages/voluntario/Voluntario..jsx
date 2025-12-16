import { useState } from "react";
import S from "./voluntario.module.scss";

const Voluntario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const nomeValido = nome.trim().length >= 3;
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const telefoneValido = telefone.length >= 10;
  const mensagemValida = mensagem.trim().length >= 10;

  const formValido =
    nomeValido && emailValido && telefoneValido && mensagemValida;

  function handleTelefone(e) {
    const apenasNumeros = e.target.value.replace(/\D/g, "");
    setTelefone(apenasNumeros);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formValido) return;

    alert("Inscrição enviada com sucesso!");

    // 🔄 LIMPA OS CAMPOS
    setNome("");
    setEmail("");
    setTelefone("");
    setMensagem("");
  }

  return (
    <main>
      {/* SEÇÃO DE APRESENTAÇÃO */}
      <section className={S.voluntario}>
        <h2>Seja Voluntário</h2>

        <p className={S.voluntario_text}>
          Junte-se a nós e faça a diferença na vida de pessoas que precisam
        </p>

        <div className={S.voluntario_cards}>
          <article className={S.voluntario_card}>
            <h3>Impacto Direto</h3>
            <p>Sua dedicação salva vidas e transforma comunidades</p>
          </article>

          <article className={S.voluntario_card}>
            <h3>Crescimento Pessoal</h3>
            <p>Desenvolva habilidades e cresça profissionalmente</p>
          </article>

          <article className={S.voluntario_card}>
            <h3>Comunidade</h3>
            <p>Faça parte de uma rede de profissionais comprometidos</p>
          </article>
        </div>
      </section>

      {/* SEÇÃO DO FORMULÁRIO */}
      <section className={S.boxForm}>
        <form onSubmit={handleSubmit} className={S.form}>
          <h3>Inscrição para Voluntários</h3>

          {/* DADOS PESSOAIS */}
          <p className={S.formTitle}>Dados Pessoais</p>

          <div className={S.row}>
            <input
              type="text"
              placeholder="Seu nome *"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className={nome && !nomeValido ? S.error : ""}
            />

            <input
              type="email"
              placeholder="Seu email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={email && !emailValido ? S.error : ""}
            />
          </div>

          <input
            type="text"
            placeholder="Seu telefone *"
            value={telefone}
            onChange={handleTelefone}
            className={telefone && !telefoneValido ? S.error : ""}
          />

          {/* MENSAGEM */}
          <p className={S.formTitle}>Mensagem Adicional</p>

          <textarea
            placeholder="Conte-nos porque você quer ser voluntário..."
            rows="4"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className={mensagem && !mensagemValida ? S.error : ""}
          />

          <p className={S.info}>
            Entraremos em contato para mais informações
          </p>

          <button type="submit" disabled={!formValido}>
            Enviar Inscrição
          </button>
        </form>
      </section>
    </main>
  );
};

export default Voluntario;
