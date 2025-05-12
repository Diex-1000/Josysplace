import { useEffect, useState } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const handler = () => setMatches(media.matches);

    handler();
    media.addEventListener
      ? media.addEventListener('change', handler)
      : media.addListener(handler);

    return () => {
      media.removeEventListener
        ? media.removeEventListener('change', handler)
        : media.removeListener(handler);
    };
  }, [query]);

  return matches;
}
