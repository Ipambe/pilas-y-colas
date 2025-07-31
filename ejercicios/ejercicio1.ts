class NavegadorWeb {
  private historial: string[] = []

  visit(pagina: string) {
    this.historial.unshift(pagina)
    console.log(`Visitaste: ${pagina}`)
  }

  back() {
    if (this.historial.length <= 1)
      return console.log('No hay páginas anteriores para volver.')

    const current = this.historial.shift()
    console.log(`Volviste a "${this.historial.at(0)}" desde "${current}"`)
  }

  mostrarHistorial() {
    console.log('Historial de navegación:')

    if (this.historial.length === 0) return console.log('(vacío)')

    this.historial.forEach((pagina) => console.log(`- ${pagina}`))
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
