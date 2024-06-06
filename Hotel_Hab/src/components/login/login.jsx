import React from "react";

const Login = () => {
  return (
    <div className="contenedor">
      <div
        id="loginbox"
        className="principal-box col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3"
      >
        <div className="row">
          <div className="icon-box">
            <img
              src="images/lock.png"
              width="128"
              height="128"
              alt="Inicio de sesión"
            />
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <div className="panel-title text-center">Inicio de sesión</div>
          </div>

          <div className="panel-body">
            <form id="loginform" className="form-horizontal">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-user"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="usuario"
                  placeholder="Número de empleado"
                  autoFocus
                />
              </div>

              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Contraseña"
                />
              </div>

              <div className="form-group">
                <div className="controls col-sm-12">
                  <button type="submit" className="btn btn-primary pull-right">
                    <i className="glyphicon glyphicon-log-in"></i> Entrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
