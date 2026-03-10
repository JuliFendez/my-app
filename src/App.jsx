import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tipoEntrada: 'general',
    comentarios: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del asistente:', formData);
    setEnviado(true);
    // Aquí podrías conectar con una API o Firebase
  };

  if (enviado) {
    return (
      <div className="container">
        <div className="card success-message">
          <h2>¡Registro Completado! 🎉</h2>
          <p>Gracias, <strong>{formData.nombre}</strong>. Hemos enviado la confirmación a {formData.email}.</p>
          <button onClick={() => setEnviado(false)}>Registrar a otra persona</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Registro al Evento 🎫</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre Completo</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              placeholder="Ej. Juan Pérez"
            />
          </div>

          <div className="form-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div className="form-group">
            <label>Tipo de Entrada</label>
            <select name="tipoEntrada" value={formData.tipoEntrada} onChange={handleChange}>
              <option value="general">General</option>
              <option value="vip">VIP</option>
              <option value="estudiante">Estudiante</option>
            </select>
          </div>

          <div className="form-group">
            <label>Comentarios Especiales (Alergias, movilidad, etc.)</label>
            <textarea
              name="comentarios"
              value={formData.comentarios}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <button type="submit" className="submit-btn">Confirmar Asistencia</button>
        </form>
      </div>
    </div>
  );
}

export default App;
