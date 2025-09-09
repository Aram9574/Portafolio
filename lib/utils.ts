export function cn(
  ...classes: Array<string | false | null | undefined | Record<string, boolean>>
): string {
  const out: string[] = [];
  for (const cls of classes) {
    if (!cls) continue;
    if (typeof cls === 'string') {
      if (cls.trim()) out.push(cls);
    } else if (typeof cls === 'object') {
      for (const [key, val] of Object.entries(cls)) {
        if (val) out.push(key);
      }
    }
  }
  return out.join(' ');
}

