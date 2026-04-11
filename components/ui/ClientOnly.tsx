'use client';
import { useEffect, useState, type ReactNode } from 'react';

export function ClientOnly({ children }: { children: ReactNode }) {
  const [ok, setOk] = useState(false);
  useEffect(() => setOk(true), []);
  if (!ok) return null;
  return <>{children}</>;
}
