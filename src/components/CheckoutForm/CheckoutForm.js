import { useState } from 'react'

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')


    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }
    return(
    <div className="container mx-auto text-center text-white border border-white space-x-4 p-3 m-3">
        <form onSubmit={handleConfirm} className="md:w-1/2 lg:w-1/3 mx-auto">
    <div className="p-4 m-4 text-center text-3xl text-white font-semibold underline">
      Datos de contacto:
    </div>
    <div className="mb-4">
      <label className="block text-xl mb-2" htmlFor="name">
        Nombre:
      </label>
      <input
        className="w-full p-2 rounded text-black text-md"
        type="text"
        id="name"
        value={name}
        placeholder="Tu nombre completo"
        onChange={({ target }) => setName(target.value)}/>
    </div>
    <div className="mb-4">
      <label className="block text-xl mb-2" htmlFor="phone">
        Teléfono:
      </label>
      <input
        className="w-full p-2 rounded text-black text-md"
        type="number"
        id="phone"
        value={phone}
        placeholder="Ingresá tu teléfono"
        onChange={({ target }) => setPhone(target.value)}/>
    </div>
    <div className="mb-4">
      <label className="block text-xl mb-2" htmlFor="email">
        Email:
      </label>
      <input
        className="w-full p-2 rounded text-black text-md"
        type="email"
        id="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        placeholder="Ingresá tu correo"/>
    </div>
    <div className="mb-4">
      <button
        type="submit"
        className="w-full bg-black border border-white text-white hover:bg-yellow-600 hover:text-white font-semibold text-lg py-2 px-2 rounded-md">
        Enviar pedido
      </button>
    </div>
  </form>
</div>
    )
}

export default CheckoutForm