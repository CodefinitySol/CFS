'use client';

import { useEffect, useState } from 'react';

/** True after the first client paint — avoids hydration mismatches from browser extensions. */
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}
