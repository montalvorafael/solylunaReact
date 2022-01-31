import React from 'react'

class Home extends React.Component{
    
    render(){

        return(
            <div>
                	{/* 	<!-- START: header --> */}

		<header role="banner" class="probootstrap-header">
			{/* <!-- <div class="container"> --> */}
			<div class="row">
				<a href="index.html" class="probootstrap-logo visible-xs"><img src={"img/LogoSolyLuna1.png"} class="hires" width="120" height="33" alt="Free Bootstrap Template by uicookies.com"/></a>

				<a href="#" class="probootstrap-burger-menu visible-xs"><i>Menu</i></a>
				<div class="mobile-menu-overlay"></div>

				<nav role="navigation" class="probootstrap-nav hidden-xs">
					<ul class="probootstrap-main-nav">
						<li class="hidden-xs probootstrap-logo-center"><a href="/"><img src="img/LogoSolyLuna1.png" class="hires" width="181" height="50" alt="Free Bootstrap Template by uicookies.com"/></a></li>
						<li class="active"><a href="/">Principal</a></li>
						<li><a href="noticias">Noticias</a></li>
						<li><a href="servicios">Servicios</a></li>            
						<li><a href="habitaciones">Habitaciones</a></li>
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

		<section class="probootstrap-slider flexslider probootstrap-inner" data-title= "Navegación guiada" data-intro= "Informacion principal">
			<ul class="slides">
				<li style={
                    {backgroundImage: "url(img/playas.jpg)"}
                } class="overlay">
					<div class="container">
						<div class="row">
							<div class="col-md-10 col-md-offset-1">
								<div class="probootstrap-slider-text text-center">
									<p><img src="img/curve_white.svg" class="seperator probootstrap-animate" alt="Free HTML5 Bootstrap Template"/></p>
									<h1 class="probootstrap-heading probootstrap-animate">Un hospedaje refinado.</h1>
									<div class="probootstrap-animate probootstrap-sub-wrap">Garantizamos seguridad, salud y mucha diversión.</div>
								</div>
							</div>
						</div>
					</div>
				</li>
				
			</ul>
		</section>
        
        <section class="probootstrap-section">
            <div class="container" data-title= "Fundación" data-intro= "Fundacion del hotel Sol y Luna">
                <div class="row mb30">
                    <div class="col-md-8 col-md-offset-2 probootstrap-section-heading text-center">
                        <h2>Hotel Sol y Luna... El mejor hotel de Ancón </h2>
                        <p class="lead">Disfruta de la mejor experiencia de nuestras hermosas playas y vive una estadia inolvidable en nuestro Hotel.</p>
                        <p><img src="img/curve.svg" class="svg" alt="Free HTML5 Bootstrap Template"/></p>

                    </div>

                </div>
            </div>
        </section>



		

    

    <section class="probootstrap-half" data-title= "Historia" data-intro= "Breve historia del hotel Sol y Luna">
			<div class="image" style={
                {backgroundImage: "url(img/hotelplayero.jpg)"}
            }></div>
			<div class="text">
				<div class="probootstrap-animate fadeInUp probootstrap-animated">
					<h2 class="mt0">Un lugar mágico para tus vacaciones</h2>
					<p><img src="img/curve_white.svg" class="seperator" alt="Free HTML5 Bootstrap Template"/></p>
					<div class="row">
						<div class="col-md-6">
							<p>Un hermosa playa conocida también como playa de Ancón, un lugar donde se producen eventos deportivos y puedes practicar el surf a pocos kilómetros de Guayaquil. </p>    
						</div>
						<div class="col-md-6">
							<p>Esta tranquila playa es recomendada para quién le guste practicar deportes en el mar, como el veleo, pesca deportiva, esquí y el surf. El rockclimbing ya que cuenta con unas montañas de tierra muy interesantes para escalar.</p>    
						</div>
					</div>
					<p><a href="#" class="link-with-icon white">Learn More <i class=" icon-chevron-right"></i></a></p>
				</div>
			</div>
		</section>

		
		<section class="probootstrap-section probootstrap-section-dark">
			<div class="container" data-title= "Resumen" data-intro= "Descripcion resumida de los servicios con mayor demanda.">
				<div class="row mb30">
					<div class="col-md-8 col-md-offset-2 probootstrap-section-heading text-center">
						<h2>Comprometidos con la hospitalidad y el buen servicio</h2>
						<p class="lead">Contamos con servicio de transfer, con el apoyo de compañías amigas. Una Van (furgoneta) con capacidad para 12 personas y un Bus con capacidad para 25 personas. Transfers a todo el Ecuador.</p>
						<p><img src="img/curve.svg" class="svg" alt="Free HTML5 Bootstrap Template"/></p>
					</div>
				</div>
				<div class="row probootstrap-gutter10">
					<div class="col-md-6">
						<div class="probootstrap-block-image-text">
							<figure>
								<a href="img/carro.jpg" class="image-popup">
									<img src="img/carro.jpg" alt="Free HTML5 Bootstrap Template by uicookies.com" class="img-responsive"/>
								</a>
								<div class="actions">
									<a href="img/carro.jpg" class="popup-vimeo"><i class="icon-play2"></i></a>
								</div>
							</figure>
							
						</div>
					</div>
					<div class="col-md-6">
						<div class="probootstrap-block-image-text">
							<figure>
								<a href="img/hotelplayero3.jpg" class="image-popup">
									<img src="img/hotelplayero3.jpg" alt="Free HTML5 Bootstrap Template by uicookies.com" class="img-responsive"/>
								</a>
								<div class="actions">
									<a href="img/hotelplayero3.jpg" class="popup-vimeo"><i class="icon-play2"></i></a>
								</div>
							</figure>							
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="probootstrap-section">
			<div class="container" data-title= "Galeria de fotos" data-intro= "Fotos del hotel y del complejo">
				<div class="row">
					<div class="col-md-12 probootstrap-relative">
						<h3 class="mt0 mb30">Galería de fotos</h3>
						<ul class="probootstrap-owl-navigation absolute right">
							<li><a href="#" class="probootstrap-owl-prev"><i class="icon-chevron-thin-left"></i></a></li>
							<li><a href="#" class="probootstrap-owl-next"><i class="icon-chevron-thin-right"></i></a></li>
						</ul>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 probootstrap-relative">
						<div class="owl-carousel owl-carousel-carousel">
							<div class="item">
								<div class="probootstrap-room">
									<a href="#"><img src="img/bodaplayera.jpg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive"/></a>
									<div class="text">
										<h3>Boda al sonar de las olas</h3>										
									</div>
								</div>
							</div>
							<div class="item">
								<div class="probootstrap-room">
									<a href="#"><img src="img/amigosbarplayero.jpg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive"/></a>
									<div class="text">
										<h3>Amigos divirtiéndose en el bar</h3>
										
									</div>
								</div>
							</div>
							<div class="item">
								<div class="probootstrap-room">
									<a href="#"><img src="img/huespedesrestauranteplayero.jpg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive"/></a>
									<div class="text">
										<h3>Húespedes disfrutando de la sazón del Hotel Sol y Luna</h3>										
									</div>
								</div>
							</div>
							<div class="item">
								<div class="probootstrap-room">
									<a href="#"><img src="img/compromisoplayero.jpg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive"/></a>
									<div class="text">
										<h3>Una historia de amor comienza</h3>
										
									</div>
								</div>
							</div>
							<div class="item">
								<div class="probootstrap-room">
									<a href="#"><img src="img/kayakplayero.jpg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive"/></a>
									<div class="text">
										<h3>Nada como una tarde de deporte</h3>
										
									</div>
								</div>
							</div>
							<div class="item">
								<div class="probootstrap-room">
									<a href="#"><img src="img/familiapiscinaplayero.jpg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive"/></a>
									<div class="text">
										<h3>Familia deleitándose en la piscina</h3>										
									</div>
								</div>
							</div>
							<div class="item">
								<div class="probootstrap-room">
									<a href="#"><img src="img/desayunoplayero.jpg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive"/></a>
									<div class="text">
										<h3>Un buen desayuno para luego disfrutar de Ancón</h3>
										
									</div>
								</div>
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
            
            </div>

            

        )
    }
    
}


export default Home