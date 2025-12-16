"use client"

import { usePathname } from 'next/navigation';
import{ useEffect } from 'react'

const FocusElementOnNavigation = () => {
      const pathname = usePathname();

  useEffect(() => {
    document.querySelector("main")?.focus();
  }, [pathname]);

  return null;
}

export default FocusElementOnNavigation
