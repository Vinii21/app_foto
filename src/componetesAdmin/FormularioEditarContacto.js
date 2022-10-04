import React from "react";
import { viaContacto } from "../assets/media_fichero";
import MapView from "./MapView";


const FormularioEditarContacto = () => {

    

    return (
        <>
        <form>
            <div className="row">
            <h3>Datos de Contacto</h3>
                <div className="col-6">
                    <label className="form-label">Instagram:</label>
                    <input className="form-control" type="text" placeholder="Pega la URL de tú instagram" value={viaContacto.instagram}/>
                    <label className="form-label">Facebook:</label>
                    <input className="form-control" type="text" placeholder="Pega la URL de tú facebook" value={viaContacto.facebook}/>
                    <label className="form-label">YouTube:</label>
                    <input className="form-control" type="text" placeholder="Pega la URL de tú canal de YouTube" value={viaContacto.youtube}/>
                    <span>Si desea agregar una nueva red social, comuniquese con el desarrollador.</span>
                </div>
                <div className="col-6">
                    <label className="form-label">Teléfono</label>
                    <input type="tel" className="form-control" placeholder={viaContacto.telefono}/>
                    <label className="form-label">WhatsApp</label>
                    <input type="tel" className="form-control" placeholder={viaContacto.whatsapp}/>
                    <label className="form-label">Correo</label>
                    <input type="email" className="form-control" placeholder={viaContacto.correo}/>
                    <label className="form-label">Dirección</label>
                    <input type="text" className="form-control" placeholder={viaContacto.direccion}/>
                </div>
            </div>
            <button style={{width: "250px"}} className="btn btn-primary">Actualizar datos de contacto</button>
        </form>
        <hr/>
            <div className="row">
                <div className="col-6">
                    <h4>Modificar coordenadas de Mapa</h4>
                    <p>
                        <small>
                            Si presiona el botón <strong style={{color: "red"}}>rojo</strong> obtendrá la posición actual según geolocalización. 
                            <br/>
                            Asegurese de estar en el lugar en donde desea colocar la ubicación en el mapa.
                        </small>
                    </p>
                    <button style={{width: "250px"}} className="btn btn-danger mb-3">Obtener mi localización actual</button>
                    <form>
                        <input className="form-control mb-3" type="text" placeholder="Latitud" />
                        <input className="form-control mb-3" type="text" placeholder="Longitud" />
                        <button style={{width: "200px"}} type="submit" className="btn btn-primary">Establecer posición</button>
                    </form>
                </div>
                <div id="mapa" style={{border: "2px solid #ccc", position: "relative", left: "-10px"}} className="col-6">
                    <MapView />
                </div>
            </div>
        </>

    );
}
 
export default FormularioEditarContacto;