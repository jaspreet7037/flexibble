"use client";

import { getProviders, signIn } from 'next-auth/react';
import { useState, useEffect } from 'react'

type Providers = {
  id: string,
  name: string,
  type: string,
  signinUrl: string,
  callbackUrl: string,
  signInUrlParams: Record<string, string> | null;
}

const AuthProviders = () => {
  const [Providers, setProviders] = useState<Providers | null>(null);
  return (
    <div>
      AuthProviders
    </div>
  )
}

export default AuthProviders
