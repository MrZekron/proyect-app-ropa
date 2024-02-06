import flashSaleImg from './static/img/flashSale.jpg';

function MainIndex() {

    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="..." className="d-block w-100" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="Third slide" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container text-center">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <div className="col">
                        <div className="p-3">
                            <button><img src="/img/flashSale.jpg" alt="" className="img-venta" />Ofertas flash</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <button><img src="" alt="" className="img-venta" />Bolsos</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <img src="{flashSaleImg}" alt="Ofertas flash" className="img-venta" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <button><img src="" alt="" className="img-venta" />Ofertas flash</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <button><img src="" alt="" className="img-venta" />Ofertas flash</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <button><img src="" alt="" className="img-venta" />Ofertas flash</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <button><img src="" alt="" className="img-venta" />Ofertas flash</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <button><img src="" alt="" className="img-venta" />Ofertas flash</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <button><img src="" alt="" className="img-venta" />Ofertas flash</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <button><img src="" alt="" className="img-venta" />Ofertas flash</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default MainIndex