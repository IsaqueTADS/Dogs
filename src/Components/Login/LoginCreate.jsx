import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import { UserContext } from "../../Contexts/UserContext";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  console.log(error);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input type="email" label="Email" name="emial" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {/* <ul className="password-recommendations">
          <li>Pelo menos 8 caracteres</li>
          <li>Pelo menos uma letra maiúscula</li>
          <li>Pelo menos uma letra minúscula</li>
          <li>Pelo menos um número</li>
          <li>Pelo menos um caractere especial (ex: !@#$%^&*)</li>
        </ul> */}

        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
      {/* <style>{`
        .password-recommendations {
          background: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 16px;
          margin: 16px 0; 
          list-style: disc inside;
          color: #555;
          font-size: 0.95rem;
        }
        .password-recommendations li {
          margin-bottom: 6px;
        }
      `}</style> */}
    </section>
  );
};

export default LoginCreate;
