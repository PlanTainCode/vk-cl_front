import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useEffect, useState } from "react";

import { TypeUser } from "services/auth/auth.helper";

interface IContext {
    user: TypeUser,
    setUser: Dispatch<SetStateAction<TypeUser>> | null
}

export const AuthContext = createContext<IContext>({} as IContext)

const AuthProvider: FC<PropsWithChildren<unknown>> = ({children}) => {
    const [user, setUser] = useState<TypeUser>(null);

    const {pathname} = useRouter(); 

    useEffect(() => {
        const accessToken = Cookies.get('accessToken');
        if (accessToken) {
            const user = JSON.parse(localStorage.getItem('user') || '');

            setUser({
                user,
                accessToken
            })
        }
    }, []);

    useEffect(() => {
        const accessToken = Cookies.get('accessToken');

    })
}