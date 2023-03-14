export function loadJs(src: string) {
  return new Promise((resolve: (value?: any) => void) => {
    if (!document.querySelector(`script[src='${src}']`)) {
      const script = document.createElement('script')
      script.type = 'text/Javascript'
      script.src = src
      script.onload = () => {
        resolve()
      }
      document.head.appendChild(script)
    } else {
      resolve()
    }
  })
}
