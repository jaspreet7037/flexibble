"use client";

import { getProviders, signIn } from 'next-auth/react';
import react, { useState, useEffect } from 'react'

type Provider = {
  id: string,
  name: string,
  type: string,
  signinUrl: string,
  callbackUrl: string,
  signInUrlParams: Record<string, string> | null;
}

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);
  if(providers) {
    return (
      <div>
        {Object.values(providers).map
        ((provider: Provider))}
      </div>
    )
  }
}

export default AuthProviders
