  export function covertToMB(value: number) {
    return (value / 1024 / 1024).toFixed(2);
  }

  export function formatFileName(value: string) {
    if (value.length >= 8) {
      return value.slice(0, 8) + '...';
    } else {
      return value;
    }
  }