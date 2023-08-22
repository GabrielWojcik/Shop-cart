import { useState } from "react";
import { Card, ContainerLogin } from "./styles";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom"

// interface LoginInterface {
//     userEmail: string,
//     userName: string,
//     password: string
// }

interface DecodeGoogle {
    name: string
    given_name: string
    email: string
    picture: string
}

export default function Login(){

    const [isApproved, setIsApproved] = useState(false)    
    const [name, setName] = useState<string>()
    const [fullName, setFullName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [profilePic, setProfilePic] = useState<string>()

    function authenticantion(credentialResponse) {
        const decoded: DecodeGoogle = jwt_decode(credentialResponse);
        setName(decoded.name)
        setEmail(decoded.email)
        setFullName(decoded.given_name)
        setProfilePic(decoded.picture)
    }

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
                    <GoogleOAuthProvider 
                        clientId="876735832686-c5ll43jmlruvj4468fq9rbg32duanvmi.apps.googleusercontent.com">
                        <GoogleLogin
                        onSuccess={credentialResponse => {
                            authenticantion(credentialResponse.credential)
                        }}
                        onError={() => {
                            console.log('Login Failed')
                        }}
                        />
                    </GoogleOAuthProvider>
                </form>
                </>
                }
            </Card>
        </ContainerLogin>
    )
}