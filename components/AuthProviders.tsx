"use client";

import { getProviders, signIn } from 'next-auth/react';
import react, { useState, useEffect } from 'react';
//import Button from "./Button";

type Provider = {
  id: string,
  name: string,
  type: string,
  signinUrl: string,
  callbackUrl: string,
  signInUrlParams?: Record<string, string> | undefined;
}

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      console.log(res);
      setProviders(res);
    }
    fetchProviders();
  }, []);

  if(providers) {
    return (
      <div>
        {Object.values(providers).map
        ((provider: Provider, i) => (
          <button key={i} title='Sign In' /*handleCLick={() => signIn(provider?.id)}*/>{provider.id}</button>
        ))}
      </div>
    )
  }
}

export default AuthProviders
