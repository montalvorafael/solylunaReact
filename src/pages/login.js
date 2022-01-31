import React from 'react'

class Login extends React.Component {

	render() {
		
		return (
			<div>

				{/* 	<!-- START: header --> */}

				<header role="banner" class="probootstrap-header">
					
					{/* <!-- <div class="container"> --> */}
					<div class="row">
						<a href="index.html" class="probootstrap-logo visible-xs"><img src="img/LogoSolyLuna1.png" class="hires" width="120" height="33" alt="Free Bootstrap Template by uicookies.com" /></a>

						<a href="#" class="probootstrap-burger-menu visible-xs"><i>Menu</i></a>
						<div class="mobile-menu-overlay"></div>

						<nav role="navigation" class="probootstrap-nav hidden-xs">
							<ul class="probootstrap-main-nav">
								<li class="hidden-xs probootstrap-logo-center"><a href="/"><img src="img/LogoSolyLuna1.png" class="hires" width="181" height="50" alt="Free Bootstrap Template by uicookies.com" /></a></li>
								<li><a href="/">Principal</a></li>
								<li><a href="noticias">Noticias</a></li>
								<li><a href="servicios">Servicios</a></li>
								<li><a href="habitaciones">Habitaciones</a></li>
								<li><a href="contactenos">Contáctenos</a></li>
								<li><a href="equipo">Equipo de desarrollo</a></li>
								<li class="active"><a href="login">Inicio de sesion</a></li>
							</ul>
							<div class="extra-text visible-xs">
								<a href="#" class="probootstrap-burger-menu"><i>Menu</i></a>
								<h5>Conecta con nosotros</h5>
								<ul class="social-buttons">
									<li><a href="#"><i class="icon-twitter"></i></a></li>
									<li><a href="#"><i class="icon-facebook2"></i></a></li>
									<li><a href="#"><i class="icon-instagram2"></i></a></li>
								</ul>
							</div>
						</nav>
					</div>
					{/* <!-- </div> --> */}
				</header>
				{/* <!-- END: header --> */}

				<body class="bg-gradient-primary">

					<div class="container">

						{/* <!-- Outer Row --> */}
						<div class="row justify-content-center" style={
                    {display: 'flex',flexWrap: 'wrap',justifyContent: 'space-between'}}>

							<div class="col-xl-10 col-lg-12 col-md-9">

								<div class="card o-hidden border-0 shadow-lg my-5">
									<div class="card-body p-0">
										{/* <!-- Nested Row within Card Body --> */}
										<div class="row" style={
                    {display: 'flex',flexWrap: 'wrap',justifyContent: 'space-between'}
                }>
											<div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
											<div class="col-lg-6">
												<div class="p-5">
													<div class="text-center">
														<h1 class="h4 text-gray-900 mb-4">Bienvenido!</h1>
													</div>
													<form class="user">
														<div class="form-group">
															<input class="form-control form-control-user"
																id="usuario" aria-describedby="userHelp"
																placeholder="Ingresa tu usuario"/>
														</div>
														<div class="form-group">
															<input type="password" class="form-control form-control-user"
																id="exampleInputPassword" placeholder="Contraseña"/>
														</div>
														<div class="form-group">
															<div class="custom-control custom-checkbox small">
																<input type="checkbox" class="custom-control-input" id="customCheck"/>
																	<label class="custom-control-label" for="customCheck">Recuerdame</label>
															</div>
														</div>
														<a href="dashboard" class="btn btn-primary btn-user btn-block">
															Ingresar
														</a>
												
															
													</form>
													<hr/>
														<div class="text-center">
															<a class="small" href="forgot-password.html">Olvidaste tu contraseña?</a>
														</div>
														<div class="text-center">
															<a class="small" href="register.html">Crear una cuenta!</a>
														</div>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>

						</div>

					</div>

					{/* <!-- Bootstrap core JavaScript--> */}
					<script src="vendor/jquery/jquery.min.js"></script>
					<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

					{/* <!-- Core plugin JavaScript--> */}
					<script src="vendor/jquery-easing/jquery.easing.min.js"></script>

					{/* <!-- Custom scripts for all pages--> */}
					<script src="js/sb-admin-2.min.js"></script>

				</body>



			</div>



		)
	}

}


export default Login