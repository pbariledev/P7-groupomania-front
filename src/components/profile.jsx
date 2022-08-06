import React from 'react';
import { useAuth } from './Auth';

export const Profile = () => {
    const auth = useAuth()

  
    return (<div>Welcome {auth.user}
    </div>)
}