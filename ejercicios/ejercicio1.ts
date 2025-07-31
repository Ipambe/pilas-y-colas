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
    if (this.historial.length === 0) return console.log('Historial vacío.')

    console.log('Historial de navegación:')
    for (const pagina of this.historial) console.log(`- ${pagina}`)
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
