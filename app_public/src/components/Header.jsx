import React from 'react';
import PropTypes from 'prop-types'

export const Header = ({titulo, subtitulo}) => {
    return (
        <div>
            <h1 className="mt-5"> {titulo} </h1>
            <hr style={{ background: "black" }} />
            <h1 className="text-center"> {subtitulo} </h1>
        </div>
    )
}

Header.propTypes = {
    titulo: PropTypes.string,
    subtitulo: PropTypes.string.isRequired
}

Header.defaultProps = {
    titulo: 'No hay Título',
    subtitulo: 'No hay Subtítulo'
}