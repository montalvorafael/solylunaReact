import React from 'react';
import Cookie from 'universal-cookie';
var cookie = new Cookie();



class Login extends React.Component {
	
	state = {username: '',
	password: ''}
	
	render() {
		function redireccionar(){
			console.log("hola")
			window.location.href='http://localhost:3000/dashboard';
		  } 
		// const  cookie = new Cookie();
		async function peticion(datos) {
			console.log(datos)
			try {
				const response = await fetch('http://localhost:3001/api/usuarios/login', {
				  method: 'post',
				  headers: {
					"Content-Type": "application/json"
				  },
				  body: JSON.stringify(datos)
				});
			  
				if (!response.ok) {
				  alert("Usuario no encontrado!")
				  const message = 'Error with Status Code: ' + response.status;
				  throw new Error(message);
				  
				}
			  
				const data = await response.json();
				console.log(data);
				setCookie("username",datos['username']);
				redireccionar();
			}catch (error) {
				console.log('Error: ' + error);
			}
		}


		const onInputChange = (e) => {
			this.setState({[e.target.name]: e.target.value });
		};

		function setCookie(name,value) {
			var expires = "";
			// if (days) {
				var date = new Date();
				date.setTime(date.getTime() + (0.2*60*60*1000 ));
				expires = "; expires=" + date.toUTCString();
			// }
			document.cookie = name + "=" + (value || "")  + expires + "; path=/";
		}

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
							<div class="row justify-content-center" style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'space-between'}}>

							<div class="col-xl-10 col-lg-12 col-md-9">

								<div class="card o-hidden border-0 shadow-lg my-5">
									<div class="card-body p-0">
										{/* <!-- Nested Row within Card Body --> */}
										<div class="row" style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'space-between'}}>
											<div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
												<div class="col-lg-6">
													<div class="p-5">
														<div class="text-center">
															<h1 class="h4 text-gray-900 mb-4">Bienvenido!</h1>
														</div>
														<form class="user">
															<div class="form-group">
																<input class="form-control form-control-user" name="usuario"
																	id="usuario" aria-describedby="userHelp" type="text"
																	placeholder="Ingresa tu usuario" name="username" onChange={(e) => onInputChange(e)} />
															</div>
															<div class="form-group">
																<input type="password" name="password" id="password" class="form-control form-control-user"
																	id="exampleInputPassword" placeholder="Contraseña" onChange={(e) => onInputChange(e)}   />
															</div>
															<div class="form-group">
																<div class="custom-control custom-checkbox small">
																	<input type="checkbox" class="custom-control-input" id="customCheck"/>
																		<label class="custom-control-label" for="customCheck">Recuerdame</label>
																</div>
															</div>
															<a 
															// href="dashboard"
															 class="btn btn-primary btn-user btn-block"
															//  onClick={() => console.log(this.state)}
															onClick={() => peticion(this.state)}  
															 >
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