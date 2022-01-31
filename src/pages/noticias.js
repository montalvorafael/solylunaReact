import React from 'react'

class Noticias extends React.Component{
    
    render(){
        
        const peticion = () => {
            fetch("data/noticias.json")
                .then(response => response.json())
                .then(data => {
                    load_notices(data);
                    //console.log(data)
                })
                .catch(console.error);
        }
        function load_notices(data) {
            let c = 0;
            let c2 = 0;
            for( let i of data){
                c++;
                c2++;
                let fecha = i.fecha;
                let d = new Date(fecha)
                let anio = d.getFullYear();
                let mes = d.getMonth();
                let dia = d.getDate();
        
                let srcImage = i.src;
                let altImage = i.alt;
                let notice_title = i.noticia;
                let dateFinal =  ((mes+1)+"/"+dia+"/"+anio);
                let num_coment = i.coments;
        
                let plantilla=`
                <div class="col-md-4 col-sm-6 col-xs-12 notice">
                    <div class="probootstrap-hentry mb30">
                        <p>
                            <a href="#"><img src="${srcImage}" alt="${altImage}" class="img-responsive">
                            </a>
                        </p>
                        <h3 class="mt0">
                            <a href="#" class="hover-reverse">${notice_title}</a>
                        </h3>
                        <p class="text-mute">${dateFinal} • <i class="icon-bubble"></i>${num_coment}</p>
                    </div>
                </div>
                `
        
        
                //Agregar noticia al feed.
                document.getElementById('cambio').innerHTML+= plantilla;
            }
        }
        peticion();
        const search_notices = (e) => {
            e.preventDefault();
            console.log("Your clicked")
            let search_bar = document.querySelector('input[type="search"]');
            let search_key = search_bar.value.toLowerCase();
            let cards = document.getElementsByClassName("notice");
        
            Array.from(cards).forEach(card => {
                if (search_key === "")
                    card.classList.remove("hidden");
                else {
                    let notice_title = card.querySelector("a.hover-reverse");
                    let match_title = notice_title.innerText.toLowerCase().includes(search_key);
                    if (!match_title)
                        card.classList.add("hidden");
                }
            })
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
                <li  class="active"><a href="noticias">Noticias</a></li>
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

<section class="probootstrap-slider flexslider probootstrap-inner" data-title= "Navegación guiada" data-intro= "Informacion principal de las noticias del hotel">
    <ul class="slides">
        <li style={
            {backgroundImage: "url(img/playac.jpg)"}
        } class="overlay">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-md-offset-1">
                        <div class="probootstrap-slider-text text-center">
                            <p><img src="img/curve_white.svg" class="seperator probootstrap-animate" alt="Free HTML5 Bootstrap Template"/></p>
                            <h1 class="probootstrap-heading probootstrap-animate">Noticias</h1>
                            <div class="probootstrap-animate probootstrap-sub-wrap">Los mejores eventos cerca de la playa.</div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</section>

{/* <!--Búsqueda--> */}
<div class="row row-cols-1 row-cols-md-3 g-4 mx-2 my-2">
    <div class="container" id="busqueda">
        <div class="row">
            <input type="search" class="form-control rounded" placeholder="Ingrese texto para filtrar noticias..." aria-label="Search" aria-describedby="search-addon" />
            <form onSubmit={search_notices}>
                <button type="submit" class="btn btn-outline-primary" id="botonB">Buscar</button>
            </form>
        </div>
    </div>
</div>

<section class="probootstrap-section">
    <div class="container" data-title= "Noticas" data-intro= "Noticias y acontecimientos mas importantes en el hotel">
        <div id="cambio" class="rownoticias">
            {/* <!-- <div class="clearfix visible-lg-block visible-md-block"></div>--> */}
        </div>
    </div>
</section>

<section class="probootstrap-half" data-title= "Pet friendly" data-intro= "Compromiso del hotel con las mascotas de sus huéspedes">
    <div class="image" style={
        {backgroundImage: "url(img/pet.jpg)"}
    }></div>
    <div class="text">
        <div class="probootstrap-animate fadeInUp probootstrap-animated">
            <h2 class="mt0">Somos Pet friendly desde el 2019</h2>
            <p><img src="img/curve_white.svg" class="seperator" alt="Free HTML5 Bootstrap Template"/></p>
            <div class="row">
                <div class="col-md-6">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
                <div class="col-md-6">
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
            </div>
            <p><a href="#" class="link-with-icon white">Learn More <i class=" icon-chevron-right"></i></a></p>
        </div>
    </div>
</section>

{/* <!-- START: footer --> */}
<footer role="contentinfo" class="probootstrap-footer" data-title= "Información" data-intro= "Informacion de contacto del hotel">
    <div class="container container-sm container-md">
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


export default Noticias