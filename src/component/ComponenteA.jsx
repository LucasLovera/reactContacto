import React from 'react';
import PropTypes from 'prop-types'
import { Contacto } from '../models/componente.class';

const ContactoA = ({ Contacto }) => {
  return (
    <div>
      <h1>nombre: {Contacto.nombre}</h1>
      <h2>apellido: {Contacto.apellido}</h2>
      <h3>email: {Contacto.email}</h3>
      <h4>
        {Contacto.conectado? 'Contacto En Línea' : 'Contacto No Disponible'}
      </h4>
    </div>
  );
};
Contacto.propTypes= {
    contacto: PropTypes.instanceOf(Contacto)
};
export default ContactoA;
