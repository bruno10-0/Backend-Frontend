import styled from 'styled-components';

const Circle = styled.span.withConfig({ shouldForwardProp: (prop) => prop !== 'estado' })`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${(props) => {
    switch (props.estado) {
      case 1:
        return 'red';
      case 2:
        return 'yellow';
      case 3:
        return 'green';
      default:
        return 'gray'; // Manejo de estado no válido
    }
  }};
`;

// eslint-disable-next-line react/prop-types
function EstadoQueja({estado}) {
  return <Circle estado={estado}></Circle>;
}

export default EstadoQueja;
