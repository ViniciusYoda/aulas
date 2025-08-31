import { useCallback, useMemo, useRef, useState } from "react";



export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const [password, SetPassword] = useState('');
    const [email, setEmail] = useState('');

    const emailLength = useMemo(() => {
        return email.length * 1000;
    }, [email.length]);

    const handleEntrar = useCallback(() => {
        console.log(email)
        console.log(password)
    }, [email, password]);

    return (
        <div>
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>
            </form>
        </div>
    )

}