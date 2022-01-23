import React from 'react'

class Equipo extends React.Component{
    
    render(){
        return(
            <div>
                
	{/* 	<!-- START: header --> */}

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
						<li><a href="contactenos">Contáctenos</a></li>
						<li class="active"><a href="equipo">Equipo de desarrollo</a></li>
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

		<section class="probootstrap-slider flexslider probootstrap-inner" data-title= "Navegación guiada" data-intro= "Equipo de desarrollo">
			<ul class="slides">
				<li style={
                    {backgroundImage: "url(img/equipotrabajo.jpg)"}
                } class="overlay">
					<div class="container">
						<div class="row">
							<div class="col-md-10 col-md-offset-1">
								<div class="probootstrap-slider-text text-center">
									<p><img src="img/curve_white.svg" class="seperator probootstrap-animate" alt="Free HTML5 Bootstrap Template"/></p>
									<h1 class="probootstrap-heading probootstrap-animate">Equipo de desarrollo</h1>
									<div class="probootstrap-animate probootstrap-sub-wrap">El éxito es la suma de pequeños esfuerzos día a día</div>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</section>

		<section class="probootstrap-section">
			<div class="container" data-title= "Equipo de desarrollo" data-intro= "Informacion de los desarrolladores del proyecto">
				<div class="row">
					<div class="col-md-3 col-sm-6 col-xs-12" data-title= "Briggitte López" data-intro= "Informacion de Briggitte López">
						<div class="probootstrap-room">
							<a href="#"><img src="img/BriggitteLV.jpg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive"/></a>
							<div class="text">
								<h3>Briggitte López</h3>
								<p>Estudiante de la materia Desarrollo Web y aplicaciones móviles.</p>              
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-12" data-title= "Lizbeth Vergara" data-intro= "Informacion de Lizbeth Vergara">
						<div class="probootstrap-room">
							<a href="#"><img src="img/liz.jpeg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive"/></a>
							<div class="text">
								<h3>Lizbeth Vergara</h3>
								<p>Estudiante de la materia Desarrollo Web y aplicaciones móviles..</p>

							</div>
						</div>
					</div>
					<div class="clearfix visible-sm-block"></div>
					<div class="col-md-3 col-sm-6 col-xs-12" data-title= "Willy Mateo" data-intro= "Informacion de Willy Mateo">
						<div class="probootstrap-room">
							<a href="#"><img src="img/willy.jpg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive"/></a>
							<div class="text">
								<h3>Willy Mateo</h3>
								<p>Estudiante de la materia Desarrollo Web y aplicaciones móviles.</p>

							</div>
						</div>
					</div>

					<div class="col-md-3 col-sm-6 col-xs-12" data-title= "Rafael Montalvo" data-intro= "Informacion de Rafael Montalvo">
						<div class="probootstrap-room">
							<a href="#"><img src="img/Montalvo.jpg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive"/></a>
							<div class="text">
								<h3>Rafael Montalvo</h3>
								<p>Estudiante de la materia Desarrollo Web y aplicaciones móviles.</p>
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


export default Equipo