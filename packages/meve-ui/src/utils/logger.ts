export function warn(message: string, from?: string) {
  if (process?.env?.NODE_ENV === 'development') {
    console.warn(`Warning: ${message} ${from ? `from ${from}` : ''}`)
  }
}
