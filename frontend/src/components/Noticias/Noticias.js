import React from "react";
import { Col, Card } from "react-bootstrap";
import iconoNoFavorito from "../../assets/no_favorito.png";
import iconoFavorito from "../../assets/favorito.png";

const Noticias = (props) => {
    const {
        onChangeFavStatus,
        isFav,
        id,
        user,
        imagen,
        titulo,
        texto,
        publicacion,
        type
    } = props;

    const handleFavClick = () => {
        /* cambio el estado de favoritos */
        onChangeFavStatus(isFav, id, user.id);
    };

    return (
        <Col lg={4} md={6} className="d-flex align-items-stretch mb-2">
            <Card>
                <img
                    className="card-img-top"
                    src={imagen}
                    alt={`imagen de la noticia ${titulo}`}
                ></img>
                <Card.Body className="card-block bg-light p-2">
                    <Card.Title style={{ fontWeight: "bold" }} className="mb-2">
                        {titulo}
                    </Card.Title>

                    <Card.Text className="mb-0">{texto}</Card.Text>

                    <hr className="my-2"></hr>

                    <div className="d-flex justify-content-between">
                        <span>{publicacion}</span>

                        {(type === "noticias" || type === "favoritos") && user && (
                            <div className="d-flex align-items-center">
                                <img
                                    style={{ cursor: "pointer" }}
                                    src={
                                        isFav ? iconoFavorito : iconoNoFavorito
                                    }
                                    alt="icono de favoritos"
                                    onClick={handleFavClick}
                                />
                            </div>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Noticias;
