import React from 'react';
import { useAuth } from './Auth';

export const Profil = () => {
    const auth = useAuth()

  
    return (<div>Welcome {auth.user}
    </div>)
}