import { useState } from "react";
import { Card, ContainerLogin } from "./styles";

interface LoginInterface {
    userEmail: string,
    userName: string,
    password: string
}

export default function Login(){
    const [userEmail, setUserEmail] = useState()
    const [userName, setUserName] = useState()
    const [userPassword, setUserPassword] = useState()
    const [isApproved, setIsApproved] = useState(false)
    return(
        <ContainerLogin>
            <Card>
                {
                    isApproved ?
                    <form>
                        <label>Nome</label>
                        <input type="text" placeholder="Nome Completo" />
                        
                        <label>Telefone</label>
                        <input type="number" placeholder="Telefone" />
                        
                        <label>CPF</label>
                        <input type="number" placeholder="CPF" />

                        <button>Criar Conta</button>
                    
                    </form>
                    :
                    <>
                    <h2>
                    Olá!
                </h2>
                <p>
                    Para continuar, digite seu e-mail.
                </p>
                <form action="">
                    <input 
                    type="email" 
                    placeholder="digite seu e-mail." 
                    required 
                    />
                    
                    <button type="submit" onClick={() => setIsApproved(true)}>
                        Continuar
                    </button>

                    {
                        isApproved ? 
                        <label>
                            Nome
                        </label>

                        :
                        null
                    }

                    <p id="option">ou utilize sua conta</p>
                    <button id="btn-google">
                        Google
                    </button>
                </form>
                </>
                }

               
            </Card>

            



        </ContainerLogin>
    )
}