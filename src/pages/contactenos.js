import React from 'react'

class Contactenos extends React.Component{

	state = {
		nombres: "",
		apellidos: "",
		correo_cliente: "",
		lugar_origen: "",
		mensaje: ""
	  };
    
    render(){

		async function peticion(datos) {
			console.log(datos)
			try {
				const response = await fetch('http://localhost:3001/api/contacto', {
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
				alert("Pronto nos comunicaremos con usted")
			}catch (error) {
				console.log('Error: ' + error);
			}
		}

		const onInputChange = (e) => {
			this.setState({[e.target.name]: e.target.value });
		};

		function informacion(){
			let datos = {
				nombres: document.getElementById("nombres").value,
				apellidos: document.getElementById("apellidos").value,
				correo_cliente: document.getElementById("correo_cliente").value,
				lugar_origen: document.getElementById("lugar_origen").value,
				mensaje: document.getElementById("mensaje").value
			};
			console.log(datos)
			
			peticion(datos)
			// console.log(this.state)
		}

        return(
            <div>
               {/*  <!-- START: header --> */}

		<header role="banner" class="probootstrap-header">
			{/* <!-- <div class="container"> --> */}
			<div class="row">
				<a href="index.html" class="probootstrap-logo visible-xs"><img src="img/LogoSolyLuna1.png" class="hires" width="120" height="33" alt="Free Bootstrap Template by uicookies.com"/></a>

				<a href="#" class="probootstrap-burger-menu visible-xs"><i>Menu</i></a>
				<div class="mobile-menu-overlay"></div>

				<nav role="navigation" class="probootstrap-nav hidden-xs">
					<ul class="probootstrap-main-nav">
						<li class="hidden-xs probootstrap-logo-center"><a href="/"><img src="img/LogoSolyLuna1.png" class="hires" width="181" height="50" alt="Free Bootstrap Template by uicookies.com"/></a></li>
						<li><a href="/">Principal</a></li>
						<li><a href="noticias">Noticias</a></li>
						<li><a href="servicios">Servicios</a></li>
						<li><a href="habitaciones">Habitaciones</a></li>
						<li class="active"><a href="contactenos">Contáctenos</a></li>
						<li><a href="equipo">Equipo de desarrollo</a></li>
						<li><a href="login">Inicio de sesion</a></li>
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
		{/* 	<!-- </div> --> */}
		</header>
		{/* <!-- END: header --> */}

		<section class="probootstrap-slider flexslider probootstrap-inner" data-title= "Navegación guiada" data-intro= "Informacion principal de contacto">
			<ul class="slides">
				<li style={
                    {backgroundImage: "url(img/Banner_Contact.jpg)"}
                } class="overlay">
					<div class="container">
						<div class="row">
							<div class="col-md-10 col-md-offset-1">
								<div class="probootstrap-slider-text text-center">
									<p><img src="img/curve_white.svg" class="seperator probootstrap-animate" alt="Free HTML5 Bootstrap Template"/></p>
									<h1 class="probootstrap-heading probootstrap-animate">Contáctenos</h1>
									<div class="probootstrap-animate probootstrap-sub-wrap">Nuestro personal amigable – bilingüe está aquí para brindar un excelente servicio al cliente y está encantado de responder cualquier pregunta sobre nuestros hoteles. Complete el siguiente formulario y nos pondremos en contacto con usted.</div>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</section>

		<section class="probootstrap-section">
			<div class="container">
				<div class="row probootstrap-gutter60">
					<div class="col-md-8" data-title= "Formulario de contacto" data-intro= "Registre sus datos">
						<h2 class="mt0">Formulario de contacto</h2>
						

						<form action="#" method="post" class="probootstrap-form">
							
							<div class="row">
								<div class="panel panel-danger">
									<div class="panel-heading">Paso 1</div>
									<div class="panel-body">
										<div class="col-md-6">
											<div class="form-group">
												<label for="fname">nombres</label>
												<input type="text" class="form-control" id="nombres" name="nombres" required data-title= "nombres" data-intro= "digite su nombre"
												onChange={(e) => onInputChange(e)}
												/>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label for="lname">apellidos</label>
												<input type="text" class="form-control" id="apellidos" name="apellidos" required data-title= "apellido" data-intro= "digite sus apellidos"
												onChange={(e) => onInputChange(e)}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="panel panel-danger">
								<div class="panel-heading">Paso 2</div>
								<div class="panel-body">
									<div class="form-group">
										<label for="email">Correo</label>
										<input type="email" class="form-control" id="correo_cliente" name="correo_cliente" required data-title= "Correo electrónico" data-intro= "Digite su correo electrónico"
										onChange={(e) => onInputChange(e)}
										/>
									</div>
									<div class="form-group">
										<label for="city">Lugar de origen</label>
										<input type="text" class="form-control" id="lugar_origen" name="lugar_origen" data-title= "Lugar de origen" data-intro= "Digite su lugar de origen"
										onChange={(e) => onInputChange(e)}
										/>
									</div>

								</div>
							</div>
							<div class="panel panel-danger">
								<div class="panel-heading">Paso 3</div>
								<div class="panel-body">
									<div class="form-group">
										<label for="message">Mensaje</label>
										<textarea cols="30" rows="10" class="form-control" id="mensaje" name="mensaje" required data-title= "Mensaje" data-intro= "Escriba el mensaje que desea enviar"
										onChange={(e) => onInputChange(e)}
										></textarea>
									</div>

								</div>
							</div>
							<div class="form-group">
								<input 
								// type="submit"
								 class="btn btn-primary btn-lg" id="submit" name="submit" value="Enviar" data-title= "Enviar" data-intro= "Envie su formulario"
								onClick={() => informacion()}
								/>
							</div>
						</form>
					</div>
					<div class="col-md-4" data-title= "Ubicación" data-intro= "ubicación satelital del hotel Sol y Luna">
						<h2 class="mt0">¿Cómo llegar?</h2>
						<ul class="probootstrap-contact-info">
							<li><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.627490116037!2d-80.8540749708231!3d-2.333444399893707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMjAnMDAuNCJTIDgwwrA1MScxMi43Ilc!5e0!3m2!1ses!2sec!4v1636086012561!5m2!1ses!2sec"
		   width="400" height="300" style={
               {border: "0"}
           } allowfullscreen="" loading="lazy"></iframe>
							</li>
							<li><i class="icon-location2"></i> <span>261 Barrio Inglés, Callejón 4 entrando por Queen Elizabeth, Ancón 240101</span></li>
							<li><i class="icon-mail"></i><span>solyluna@domain.com</span></li>
							<li><i class="icon-phone2"></i><span>+123 456 7890</span></li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<section class="probootstrap-half" data-title= "Acerca de Ancón" data-intro= "Historia y referencias de Ancón">
			<div class="image" style={
                {backgroundImage: "url(img/Ancon.jpg)"}
            }></div>
			<div class="text">
				<div class="probootstrap-animate fadeInUp probootstrap-animated">
					<h2 class="mt0">Ubicados en Ancón, donde la tranquilidad y la naturaleza enamoran</h2>
					<p><img src="img/curve_white.svg" class="seperator" alt="Free HTML5 Bootstrap Template"/></p>
					<div class="row">
						<div class="col-md-6">
							<p>Ancón surgió alrededor del 5 de noviembre de 1911 como campo petrolero de la compañía inglesa Anglo Ecuadorian Oilfields Limited. En ese año se perforó allí el primer pozo petrolero de Ecuador, llamado Ancon-001.</p>
						</div>
						<div class="col-md-6">
							<p>Turistas de todas partes del mundo se quedan encantados con la tranquilidad, la naturaleza, los paisajes que combinan el bosque tropical seco, los acantilados y el mar donde los locales practican bodyboard y surf al amanecer y atardecer.</p>
						</div>
					</div>
					<p><a href="#" class="link-with-icon white">Leer más<i class=" icon-chevron-right"></i></a></p>
				</div>
			</div>
		</section>

		{/* <!-- START: footer --> */}
		<footer role="contentinfo" class="probootstrap-footer" data-title= "Información" data-intro= "Informacion de contacto del hotel">
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<div class="probootstrap-footer-widget">
							<p class="mt40"><img src="img/LogoSolyLuna1.png" class="hires" width="120" height="33" alt="Free HTML5 Bootstrap Template by uicookies.com"/></p>
							<p>Hotel familiar en el que te podras sentir como en casa acogido por la hermosa brisa de la playa y diversos entretenimientos.</p>
							<p><a href="#" class="link-with-icon">Learn More <i class=" icon-chevron-right"></i></a></p>
						</div>
					</div>
					<div class="col-md-4">
						<div class="probootstrap-footer-widget">
							<h3>Noticias</h3>
							<ul class="probootstrap-blog-list">
								<li>
									<a href="#">
										<figure class="probootstrap-image"><img src="img/connor.jpg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive"/></figure>
										<div class="probootstrap-text">
											<h4>Connor McGregor en feriado</h4>
											<span class="meta">Julio 25, 2017</span>
											<p> Aliquam vestibulum enim ac sem placerat fringilla.</p>
										</div>
									</a>
								</li>
								<li>
									<a href="#">
										<figure class="probootstrap-image"><img src="img/cena.jpg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive"/></figure>
										<div class="probootstrap-text">
											<h4>Cenas románticas al aire libre</h4>
											<span class="meta">Julio 25, 2017</span>
											<p>Aliquam vestibulum enim ac sem placerat fringilla.</p>
										</div>
									</a>
								</li>
								<li>
									<a href="#">
										<figure class="probootstrap-image"><img src="img/reconocimiento.jpg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive"/></figure>
										<div class="probootstrap-text">
											<h4>Mejor hotel de la costa</h4>
											<span class="meta">Junio 19, 2019</span>
											<p>Aliquam vestibulum enim ac sem placerat fringilla.</p>
										</div>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-md-4">
						<div class="probootstrap-footer-widget">
							<h3>Contáctenos</h3>
							<ul class="probootstrap-contact-info">
								<li><i class="icon-location2"></i> <span>261 Barrio Inglés, Callejón 4 entrando por Queen Elizabeth, Ancón 240101</span></li>
								<li><i class="icon-mail"></i><span>solyluna@domain.com</span></li>
								<li><i class="icon-phone2"></i><span>+123 456 7890</span></li>
							</ul>

						</div>
					</div>
				</div>
				<div class="row mt40">
					<div class="col-md-12 text-center">
						<ul class="probootstrap-footer-social">
							<li><a href=""><i class="icon-twitter"></i></a></li>
							<li><a href=""><i class="icon-facebook"></i></a></li>
							<li><a href=""><i class="icon-instagram2"></i></a></li>
						</ul>
						<p>
							<small>&copy; 2021 Todos los derechos Reservados.</small>
						</p>

					</div>
				</div>
			</div>
		</footer>
		{/* <!-- END: footer --> */}
              
               
            </div>

            

        )
    }
    
}


export default Contactenos