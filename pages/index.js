import { useState } from "react";

function Home(){

    const [mensagem, setMensagem] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        setMensagem("Perfeito! Estamos analisando os seus dados. Logo recebera o resultado muito satisfatirio..........");
    }

    return (
        <>
        <h1>Prrencha e ganhe um emprestimo</h1>
        <form onSubmit={handleSubmit}>
            <p>
            <label for="size_1">CPF: </label>
            <input type="int" name="cpf" placeholder="Digite o seu CPF"/>
            </p>
            <p>
            <label for="size_1">Conta: </label>
            <input type="int" name="conta" placeholder="Digite a sua conta do banco"/>
            </p>   
            <p>
            <label for="size_1">Senha: </label>
            <input type="password" name="senha" placeholder="Digite a sua senha"/>
            </p>
            <p>
            <label for="size_1">Email: </label>
            <input type="text" name="email" placeholder="Digite o seu email"/>
            </p>
            <p>
            <label for="size_1">Contato: </label>
            <input type="text" name="contato" placeholder="Digite o seu contato"/>
            </p>  
            <p>
           <button type="submit">Enviar</button>
           </p>         
        </form>
        {mensagem && <p>{mensagem}</p>}
        </>
    );
}

export default Home;