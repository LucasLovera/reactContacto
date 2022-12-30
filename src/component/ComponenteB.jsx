import ContactoA from "./ComponenteA";
import { Contacto } from "../models/componente.class";

const contactoB =() => {
    const defaultContacto = new Contacto ('Lucas', 'Lovera', 'lucaslovera.92@gmail.com', false) 
    return (
        <div>
            <ContactoA Contacto={defaultContacto}></ContactoA>
        </div> 
    );
};
export default contactoB