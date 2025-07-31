class NavegadorWeb {
  private historial: string[] = []

  visit(pagina: string): void {
    this.historial.push(pagina)
    console.log(`Visitaste: ${pagina}`)
  }

  back(): void {
    if (this.historial.length <= 1)
      return console.log('No hay páginas anteriores para volver.')

    const current = this.historial.pop()
    console.log(`Volviste a "${this.historial.at(-1)}" desde "${current}"`)
  }

  mostrarHistorial(): void {
    console.log('Historial de navegación:')

    if (this.historial.length === 0) return console.log('(vacío)')

    this.historial.forEach((page, index) => console.log(`- ${page}`))
  }
}

// Ejemplo de uso
const navegador = new NavegadorWeb()

navegador.visit('https://www.ejemplo1.com')
navegador.visit('https://www.ejemplo2.com')
navegador.visit('https://www.ejemplo3.com')
console.log()

navegador.mostrarHistorial()
console.log()

navegador.back()
navegador.mostrarHistorial()
console.log()

navegador.back()
navegador.mostrarHistorial()
console.log()

navegador.visit('https://www.ejemplo4.com')
navegador.mostrarHistorial()
console.log()
