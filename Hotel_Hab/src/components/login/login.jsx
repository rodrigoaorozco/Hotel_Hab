import React from "react";

export const Login () => {
    return (
        <div className="contenedor">    
        
    <div id="loginbox" className="caja principal col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
        
        <div clase="fila">                
            <div className="iconomelón">
              <img src="images/lock.png" width="128" height="128" alt="Inicio de sesión">
            </div>
        </div>
        
        <div className="panel panel-predeterminado" >
            <div className="encabezado del panel">
                <div className="panel-title text-center">Inicio de sesión</div>
            </div>     

            <div className="cuerpo-panel" >

                <formulario id="formulario" clase="formulario-horizontal">
                   
                    <div className="grupo-entrada">
                        <span className="input-group-addon"><i className="glifo glifo-usuario"></i></span>
                        <input type="text" className="form-control" name="usuario" value="" placeholder="Número de empleado" autofocus="">                                        
                    </div>

                    <div className="grupo-entrada">
                        <span className="input-group-addon"><i className="glifo glifo-bloqueo"></i></span>
                        <tipo de entrada="contraseña" clase="control-formulario" nombre="contrasenia" placeholder="Contraseña">
                    </div>                                                                  

                    <div className="grupo-formulario">
                        <!-- Botón -->
                        <div className="controles col-sm-12">
                            <button type="submit" href="#" className="btn btn-primary pull-right"><i className="glyphicon glyphicon-log-in"></i> Entrar</button>                          
                        </div>
                    </div>

                </formulario>     

            </div>                     
        </div>  
    </div>
</div>
    )
}