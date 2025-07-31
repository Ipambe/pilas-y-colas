class Banco {
  private colaClientes: string[] = []

  encolarCliente(cliente: string) {
    this.colaClientes.push(cliente)
    console.log(`Cliente "${cliente}" ha llegado y está en la cola.`)
  }

  atenderCliente() {
    if (this.colaClientes.length === 0)
      return console.log('No hay clientes para atender.')

    const clienteAtendido = this.colaClientes.shift()
    console.log(`Atendiendo al cliente: ${clienteAtendido}`)
  }

  mostrarCola() {
    if (this.colaClientes.length === 0)
      return console.log('Cola de clientes vacía.')

    console.log('Clientes en espera:')
    for (const cliente of this.colaClientes) console.log(`- ${cliente}`)
  }
}

// Ejemplo de uso
const banco = new Banco()

banco.encolarCliente('Carlos')
banco.encolarCliente('Ana')
banco.encolarCliente('Luis')
console.log()

banco.mostrarCola()
console.log()

banco.atenderCliente()
banco.mostrarCola()
console.log()

banco.atenderCliente()
banco.mostrarCola()
console.log()

banco.encolarCliente('María')
banco.mostrarCola()
console.log()

banco.atenderCliente()
banco.mostrarCola()
console.log()

banco.atenderCliente()
console.log()
