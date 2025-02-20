const menu=`
<nav class="navbar navbar-expand-lg  bg-primary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img src="images/Logo_Original_Centro35.png" alt="Logo" width="30" height="24"
                        class="d-inline-block align-text-top">
                    Centro 35
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="oferta.html">Oferta educativa</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="inscripciones.html">Inscripciones</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="bolsa.html">Bolsa de trabajo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="contacto.html">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
`
document.getElementById("menu").innerHTML=menu