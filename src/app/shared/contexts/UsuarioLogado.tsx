import React, { createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string,
    logout: () => void;
}

export const UsuarioLogaoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode
}

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {
    const [nome, setNome] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setNome('Vini');
        }, 1000);
    });

    const handleLogout = useCallback(() => {
        console.log('Logout')
    }, []);

    return (
        <UsuarioLogaoContext.Provider value={{ nomeDoUsuario: nome, logout: handleLogout}}>
            {children}
        </UsuarioLogaoContext.Provider>
    )
}