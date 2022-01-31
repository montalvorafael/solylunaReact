import React from 'react'

class Habitaciones extends React.Component{
    
    render(){
        return(
            <div>
              {/*   <!-- START: header --> */}
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
						<li class="active"><a href="habitaciones">Habitaciones</a></li>
						<li><a href="contactenos">Contáctenos</a></li>
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
			{/* <!-- </div> --> */}
		</header>
		{/* <!-- END: header --> */}

		<section class="probootstrap-slider flexslider probootstrap-inner" data-title= "Navegación guiada" data-intro= "Habitaciones del hotel">
			<ul class="slides">
				<li style={
                    {backgroundImage: "url(img/roombanner.jpg)"}
                } class="overlay">
					<div class="container">
						<div class="row">
							<div class="col-md-10 col-md-offset-1">
								<div class="probootstrap-slider-text text-center">
									<p><img src="img/curve_white.svg" class="seperator probootstrap-animate" alt="Free HTML5 Bootstrap Template"/></p>
									<h1 class="probootstrap-heading probootstrap-animate">Habitaciones de clase para gente elegante</h1>
									<div class="probootstrap-animate probootstrap-sub-wrap">Experimente auténtica hospitalidad Ecuatoriana con habitaciones de lujo.</div>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</section>

		<section class="probootstrap-section">
			<div class="container" data-title= "Habitaciones" data-intro= "Incluye gran variedad de habitaciones">
				<div class="row">
					<div class="col-sm-6 col-xs-12" data-title= "Habitacion matrimonial" data-intro= "Habitacion sencilla, con un precio accesible de $29.00 por noche">
						<div class="probootstrap-room">
							<a href="#"><img src="img/habitacion-sencilla.jpg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive"/></a>
							<div class="text">
								<h3>Habitación matrimonial</h3>
								<p>Precios desde <strong>$29.00/Noche</strong></p>
								<div class="post-meta mb30">
									<ul>
										<li><span class="review-rate">4.1</span> <i class="icon-star"></i> 551 Reseñas</li>
										<li><i class="icon-user2"></i> 1 Persona</li>
									</ul>
								</div>
								<p><a href="#" class="btn btn-primary" role="button">Reserve ahora por $29.00</a></p>
							</div>
						</div>
					</div>

					<div class="col-sm-6 col-xs-12" data-title= "Habitacion doble" data-intro= "Habitacion de doble cama, con un precio accesible de $35.00 por noche">
						<div class="probootstrap-room">
							<a href="#"><img src="img/habitacion-doble.jpg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive"/></a>
							<div class="text">
								<h3>Habitación doble</h3>
								<p>Precios desde <strong>$35.00/Noche</strong></p>
								<div class="post-meta mb30">
									<ul>
										<li><span class="review-rate">4.2</span> <i class="icon-star"></i> 152 Reseñas</li>
										<li><i class="icon-user2"></i> 2 Personas</li>
									</ul>
								</div>
								<p><a href="#" class="btn btn-primary" role="button">Reserve ahora por $35.00</a></p>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-6 col-xs-12" data-title= "Habitacion de colegas" data-intro= "Habitacion de 3 camas, con un precio accesible de $40.00 por noche">
						<div class="probootstrap-room">
							<a href="#"><img src="img/habitacion-triple.jpg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive"/></a>
							<div class="text">
								<h3>Habitación de colegas</h3>
								<p>Precios desde <strong>$40.00/Noche</strong></p>
								<div class="post-meta mb30">
									<ul>
										<li><span class="review-rate">4.7</span> <i class="icon-star"></i> 300 Reseñas</li>
										<li><i class="icon-user2"></i> 3 Personas</li>
									</ul>
								</div>
								<p><a href="#" class="btn btn-primary" role="button">Reserve ahora por $40.00</a></p>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-xs-12" data-title= "Habitacion tipo Suite" data-intro= "Habitacion lujosa con un precio accesible de $70.00 por noche">
						<div class="probootstrap-room">
							<a href="#"><img src="img/habitacion-matrimonial.jpg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive"/></a>
							<div class="text">
								<h3>Suite</h3>
								<p>Precios desde <strong>$70.00/Noche</strong></p>
								<div class="post-meta mb30">
									<ul>
										<li><span class="review-rate">4.9</span> <i class="icon-star"></i> 51 Reseñas</li>
										<li><i class="icon-user2"></i> 2 Personas</li>
									</ul>
								</div>
								<p><a href="#" class="btn btn-primary" role="button">Reserve ahora por $70.00</a></p>
							</div>
						</div>
					</div>
				</div>

				<div class="row" data-title= "Compromiso de calidad" data-intro= "El hotel Sol y Luna, incluye varios beneficios para sus huéspedes">
					<div class="col-md-12 text-center">
						<h2>Siempre la mejor opción</h2>
						<p class="mb50"><img src="img/curve.svg" class="svg" alt="Free HTML5 Bootstrap Template"/></p>
					</div>
					<div class="col-md-4">
						<div class="service left-icon left-icon-sm probootstrap-animate">
							<div class="icon">
								<i class="icon-check"></i>
							</div>
							<div class="text">
								<h3>Experiencias únicas</h3>
								<p>Enriquezca su mente, cuerpo y alma, con todas las sorpresas que Sol y Luna tiene para usted.</p>
							</div>  
						</div>
					</div>
					<div class="col-md-4">
						<div class="service left-icon left-icon-sm probootstrap-animate">
							<div class="icon">
								<i class="icon-check"></i>
							</div>
							<div class="text">
								<h3>Gastronomía de primera</h3>
								<p>En Sol y Luna una comida se convierte en un viaje culinario.</p>
							</div>  
						</div>
					</div>
					<div class="col-md-4">
						<div class="service left-icon left-icon-sm probootstrap-animate">
							<div class="icon">
								<i class="icon-check"></i>
							</div>
							<div class="text">
								<h3>Alojamiento de lujo</h3>
								<p>Disfrute de la comodidad e su máximo esplendor en nuestras magníficas habitaciones y suites.</p>
							</div>  
						</div>
					</div>
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


export default Habitaciones