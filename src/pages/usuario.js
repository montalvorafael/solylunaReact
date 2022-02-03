import React from "react";
import Cookie from "universal-cookie";
var cookie = new Cookie();
var id = '';

class Usuario extends React.Component {
  state = {
    username: "",
    password: "",
    nombres: "",
    apellidos: "",
    email: "",
    admin: "",
    // document.getElementById("admin").checked
  };

  render() {
    function cargarDatos() {
      let user = getCookie("username");
      fetch(`http://localhost:3001/api/reservas/${user}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          for (let cliente of data) {
            let fechaSalida = cliente.fecha_salida.split("T");
            let fechaEntrada = cliente.fecha_entrada.split("T");
            let fechaReserva = cliente.fecha_reservado.split("T");
            let plan = `
                <tr>
                <td>${cliente.Habitacion.num}</td>
                <td>${cliente.Habitacion.Tipo_Habitacion.tipo}</td>
                <td>${fechaReserva[0]}</td>
                <td>${fechaEntrada[0]}</td>
                <td>${fechaSalida[0]}</td>
                <td>${"$" + cliente.Factura.precio_total}</td>
                </tr>`;


            let plantillaSel =
             `
            <option value ='${cliente.id}' >${"Habitacion " + cliente.Habitacion.Tipo_Habitacion.tipo + " No " + cliente.Habitacion.num + " Fecha de entrada: "+ fechaEntrada[0]  }</option>
            `   
            document.getElementById("tablas").innerHTML += plan;
            document.getElementById("selectores").innerHTML += plantillaSel;
          }
        })
        .catch(console.error);
    }

    
    cargarDatos();

    const onInputChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

    function getCookie(user) {
      var userEQ = user + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(userEQ) == 0) return c.substring(userEQ.length, c.length);
      }
      return null;
    }

    function cerrarSesion() {
      document.cookie = "username=; max-age=0";
      window.location.href = "http://localhost:3000/login";
    }

    function selecionado(){
       id = document.getElementById("selectores").value;
      console.log(id)
    }
    
      async function eliminar (){
        try {
          const response = await fetch('http://localhost:3001/api/reservas/'+id, {
            method: "delete",
          },
          );
          if (!response.ok) {
            const message = 'Error with Status Code: ' + response.status;
            throw new Error(message);
          }
          const data = await response.json();
          console.log(data);
          } catch (error) {
          console.log('Error: ' + error);
          }
      }

    return (
      <div>
        {/* 	<!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/*   <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              {/*  <!-- Sidebar Toggle (Topbar) --> */}
              <form className="form-inline">
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link d-md-none rounded-circle mr-3"
                >
                  <i className="fa fa-bars"></i>
                </button>
              </form>

              {/*  <!-- Topbar Search --> */}

              {/*     <!-- Topbar Navbar --> */}
              <ul className="navbar-nav ml-auto">
                {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                <li className="nav-item dropdown no-arrow d-sm-none">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="searchDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-search fa-fw"></i>
                  </a>
                  {/* <!-- Dropdown - Messages --> */}
                  <div
                    className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                    aria-labelledby="searchDropdown"
                  >
                    <form className="form-inline mr-auto w-100 navbar-search">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control bg-light border-0 small"
                          placeholder="Buscar"
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>

                {/* <!-- Nav Item - User Information --> */}
                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      {getCookie("username")}
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src="img/undraw_profile.svg"
                    />
                  </a>
                  {/* <!-- Dropdown - User Information --> */}
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <div className="dropdown-divider"></div>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#logoutModal"
                    >
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
            {/*  <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              {/*   <!-- Page Heading --> */}
              <h1 className="h3 mb-2 text-gray-800">Reservas de nombre</h1>
              <p className="mb-4">
                Historial de reservas registrados en la hosteria Sol y Luna.
              </p>

              {/*  <!-- DataTales Example --> */}
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Reservas:
                  </h6>
                </div>
                <div className="card-body">
                  <div className="card">
                    <div className="card-body">
                      <div className="text-center px-xl-3">
                        <div className="table-responsive">
                          <table
                            className="table table-bordered"
                            id="dataTable"
                            width="100%"
                            cellSpacing="0"
                          >
                            {/* <thead> 0*/}
                            <tr>
                              <td>
                                <button
                                  className="btn btn-success btn-block"
                                  type="button"
                                  data-toggle="modal"
                                  data-target="#user-form-modal"
                                >
                                  Nuevo Usuario
                                </button>
                              </td>
                              {/* <br></br> */}
                              <td>
                                <button
                                  className="btn btn-success btn-block"
                                  type="button"
                                  // data-toggle="modal"
                                  data-target="#user-form-modal"
                                  onClick={() => cerrarSesion()}
                                >
                                  Editar
                                </button>
                              </td>

                              {/* <td><button className="btn btn-success btn-block" type="button" data-toggle="modal" data-target="#user-form-modal">Eliminar</button></td> */}

                              <td>
                                <button
                                  type="button"
                                  class="btn btn-primary"
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                >
                                  Eliminar reserva
                                </button>
                              </td>
                            </tr>
                            {/* </thead> */}
                          </table>
                        </div>
                        {/* <tr>
                                              <td><button className="btn btn-success btn-block" type="button" data-toggle="modal" data-target="#user-form-modal">Nuevo Usuario</button></td>
                                              <br></br>
                                              <td><button className="btn btn-success btn-block" type="button" data-toggle="modal" data-target="#user-form-modal">Nuevo Usuario2</button></td>
                                              </tr> */}
                      </div>
                      {/* <hr className="my-1"/> */}
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellSpacing="0"
                    >
                      <thead>
                        <tr>
                          <th>Numero de habitacion</th>
                          <th>Tipo de habitacion</th>
                          <th>Fecha de reserva</th>
                          <th>Fecha de entrada</th>
                          <th>Fecha de salida</th>
                          <th>Precio total</th>
                        </tr>
                      </thead>
                      {/* <tfoot id='tablas' >
                                        
                                    </tfoot> */}
                      <tbody id="tablas"></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/*  <!-- /.container-fluid --> */}
          </div>
          {/*  <!-- End of Main Content --> */}

          {/*  <!-- Footer --> */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Hostería Sol y Luna 2021</span>
              </div>
            </div>
          </footer>
          {/*     <!-- End of Footer --> */}
        </div>
        {/*  <!-- End of Content Wrapper --> */}

        {/*   <!-- User Form Modal --> */}

        <div class="modal-dialog modal-dialog-centered">
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            style={{ paddingTop: "90px" }}
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Seleccione que reserva desea eliminar
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                {/* <div class="modal-body"> */}
                  <select class="form-select" size="3" aria-label="size 3 select example" id="selectores" onChange={()=>selecionado()} >
                  </select>
                {/* </div> */}
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  <button type="button" class="btn btn-primary" onClick={() => eliminar()} >
                    Eliminar 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          role="dialog"
          tabIndex="-1"
          id="user-form-modal"
          style={{ paddingTop: "90px" }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Crear Usuario</h5>
                <button type="button" className="close" data-dismiss="modal">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="py-1">
                  <form id="formulario" className="form" noValidate="">
                    <div className="row">
                      <div className="col">
                        {/* <!-- Nombre y Apellido --> */}
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>Nombres</label>
                              <input
                                className="form-control"
                                type="text"
                                id="nombres"
                                name="nombres"
                                placeholder="John"
                                //  value="John"

                                onChange={(e) => onInputChange(e)}
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-group">
                              <label>Apellidos</label>
                              <input
                                className="form-control"
                                type="text"
                                id="apellidos"
                                name="apellidos"
                                placeholder="Smith"
                                // value="Smith"

                                onChange={(e) => onInputChange(e)}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>Usuario</label>
                              <input
                                className="form-control"
                                type="text"
                                id="username"
                                name="username"
                                placeholder="usuario"
                                // value="usuario"

                                onChange={(e) => onInputChange(e)}
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-group">
                              <label>Contraseña</label>
                              <input
                                className="form-control"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="password"
                                // value="password"

                                onChange={(e) => onInputChange(e)}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>Correo</label>
                              <input
                                className="form-control"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="user@ejemplo.com"
                                // value="user@ejemplo.com"
                                onChange={(e) => onInputChange(e)}
                              />
                            </div>
                          </div>
                          <div className="col">
                            <label>Admin</label>
                            <div className="custom-controls-stacked px-2">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  id="admin"
                                  className="custom-control-input"
                                  id="notifications-blog"
                                  checked=""
                                />
                                <label
                                  className="custom-control-label"
                                  for="notifications-blog"
                                >
                                  Activo
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="col d-flex justify-content-end">
                          <button
                            className="btn btn-primary"
                            id="guardar"
                            type="submit"
                            // onClick={() =>
                            //   enviar()}
                            // onClick={handleClick}
                          >
                            Guardar
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Logout Modal--> */}
        <div
          className="modal fade"
          id="logoutModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ paddingTop: "30px" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <a
                  className="btn btn-primary"
                  // href="/"
                  onClick={() => cerrarSesion()}
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Usuario;
