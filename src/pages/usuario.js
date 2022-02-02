import React from 'react';
import Cookie from 'universal-cookie';
var cookie = new Cookie();

class Usuario extends React.Component {

	render() {

    function getCookie(user) {
			var userEQ = user + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(userEQ) == 0) return c.substring(userEQ.length,c.length);
			}
			return null;
		}
    console.log(getCookie('username'))
    
    function cerrarSesion(){
      document.cookie = 'username=; max-age=0';
      window.location.href='http://localhost:3000/login';

    }
		
		return (
      
			<div>
				
			{/* 	<!-- Content Wrapper --> */}
        <div id="content-wrapper" class="d-flex flex-column">

          {/*   <!-- Main Content --> */}
            <div id="content">

                {/* <!-- Topbar --> */}
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                   {/*  <!-- Sidebar Toggle (Topbar) --> */}
                    <form class="form-inline">
                        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                            <i class="fa fa-bars"></i>
                        </button>
                    </form>

                   {/*  <!-- Topbar Search --> */}
                    

                {/*     <!-- Topbar Navbar --> */}
                    <ul class="navbar-nav ml-auto">

                       {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                        <li class="nav-item dropdown no-arrow d-sm-none">
                            <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-search fa-fw"></i>
                            </a>
                            {/* <!-- Dropdown - Messages --> */}
                            <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                aria-labelledby="searchDropdown">
                                <form class="form-inline mr-auto w-100 navbar-search">
                                    <div class="input-group">
                                        <input type="text" class="form-control bg-light border-0 small"
                                            placeholder="Buscar" aria-label="Search"
                                            aria-describedby="basic-addon2"/>
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">
                                                <i class="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        

                        {/* <!-- Nav Item - User Information --> */}
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">{getCookie('username')}</span>
                                <img class="img-profile rounded-circle"
                                    src="img/undraw_profile.svg"/>
                            </a>
                            {/* <!-- Dropdown - User Information --> */}
                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"  ></i>
                                    Logout
                                </a>
                            </div>
                        </li>

                    </ul>

                </nav>
               {/*  <!-- End of Topbar --> */}

                {/* <!-- Begin Page Content --> */}
                <div class="container-fluid">

                  {/*   <!-- Page Heading --> */}
                    <h1 class="h3 mb-2 text-gray-800">Reservas de nombre</h1>
                    <p class="mb-4">Historial de reservas registrados en la hosteria Sol y Luna.</p>

                   {/*  <!-- DataTales Example --> */}
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Reservas:</h6>
                        </div>
                        <div class="card-body">
						<div class="card">
                                          <div class="card-body">
                                            <div class="text-center px-xl-3">
                                              <button class="btn btn-success btn-block" type="button" data-toggle="modal" data-target="#user-form-modal">Nuevo Usuario</button>
                                            </div>
                                            <hr class="my-1"/>
                                           
                                            
                                          </div>
                                        </div>
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Usuario</th>
                                            <th>Nombres</th>
                                            <th>Apellidos</th>
                                            <th>Correo</th>
                                            <th>Admin</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Usuario</th>
                                            <th>Nombres</th>
                                            <th>Apellidos</th>
                                            <th>Correo</th>
                                            <th>Admin</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </tfoot>
                                    <tbody id="usuarios">
                                        
                                    </tbody>
                                    
                                        
                                      
                                    
                                </table>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    

                </div>
               {/*  <!-- /.container-fluid --> */}
                

            </div>
           {/*  <!-- End of Main Content --> */}

           {/*  <!-- Footer --> */}
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Hostería Sol y Luna 2021</span>
                    </div>
                </div>
            </footer>
        {/*     <!-- End of Footer --> */}

        </div>
       {/*  <!-- End of Content Wrapper --> */}
	   
	 {/*   <!-- User Form Modal --> */}
    <div class="modal fade" role="dialog" tabindex="-1" id="user-form-modal" style={
                    {paddingTop: "90px"}
                }>
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Crear Usuario</h5>
              <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="py-1">
                <form id='formulario' class="form" novalidate="">
                  <div class="row">
                    <div class="col">
                      
                      {/* <!-- Nombre y Apellido --> */}
                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label>Nombres</label>
                            <input class="form-control" type="text" name="name" placeholder="John" value="John"/>
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-group">
                            <label>Apellidos</label>
                            <input class="form-control" type="text" name="lastname" placeholder="Smith" value="Smith"/>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label>Usuario</label>
                            <input class="form-control" type="text" name="user" placeholder="usuario" value="usuario"/>
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-group">
                            <label>Contraseña</label>
                            <input class="form-control" type="password" name="password" placeholder="password" value="password"/>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label>Correo</label>
                            <input class="form-control" type="email" name="email" placeholder="user@ejemplo.com" value="user@ejemplo.com"/>
                          </div>
                        </div>
                        <div class="col">
                            <label>Admin</label>
                            <div class="custom-controls-stacked px-2">
                              <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="notifications-blog" checked=""/>
                                <label class="custom-control-label" for="notifications-blog">Activo</label>
                              </div>
                             
                            </div>
                          </div>
                        
                      </div>

                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="col d-flex justify-content-end">
                        <button class="btn btn-primary" type="submit">Guardar</button>
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
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true" style={
			{paddingTop: "30px"}
		}>
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" 
                    // href="/"
                    onClick={() => cerrarSesion()} 
                    >Logout</a>
                </div>
            </div>
        </div>
    </div>


			</div>



		)
	}

}


export default Usuario