import React, { useState } from 'react';

export const CreateLoan = () => {
  const [loanData, setLoanData] = useState({
    nombre: '',
    direccion: '',
    interes: '',
    cantidad: '',
    fechaPrestamo: '',
    fechaPago: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanData({
      ...loanData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario
    console.log('Datos del préstamo:', loanData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Crear Préstamo</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <input 
            type="text" 
            name="nombre" 
            value={loanData.nombre} 
            onChange={handleChange} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Dirección</label>
          <input 
            type="text" 
            name="direccion" 
            value={loanData.direccion} 
            onChange={handleChange} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">% de Interés</label>
          <input 
            type="number" 
            name="interes" 
            value={loanData.interes} 
            onChange={handleChange} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Cantidad de Dinero</label>
          <input 
            type="number" 
            name="cantidad" 
            value={loanData.cantidad} 
            onChange={handleChange} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Fecha de Préstamo</label>
          <input 
            type="date" 
            name="fechaPrestamo" 
            value={loanData.fechaPrestamo} 
            onChange={handleChange} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Fecha de Pago</label>
          <input 
            type="date" 
            name="fechaPago" 
            value={loanData.fechaPago} 
            onChange={handleChange} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Crear Préstamo
        </button>
      </form>
    </div>
  );
};