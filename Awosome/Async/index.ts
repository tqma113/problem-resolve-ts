export function foo(url: string) {
  setTimeout(() => {
    fetch(url)
  }, 0)
}