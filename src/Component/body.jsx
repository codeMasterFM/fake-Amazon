import comentario1 from '../comentario1.jpeg'
import comentario2 from '../comentario2.jpeg'
import React from "react";
import {Preguntas} from './Preguntas'
export const body = () => {
  return (
    <div className="body">
      <label>Hola,</label>
      <p>
        Ahora estas participando en el concurso anual de Black Friday de Amazon.
      </p>
      <p>
        !Responde a este breve cuestionario, encuentra el primero oculto y gana
        un increble y exclisivo regalo
      </p>

      <p>
        Quedan <b>80</b> regalos
      </p>
      <Preguntas/>
      <img src={comentario1} style={{width:'100%'}} alt="" />
      <img src={comentario2} style={{width:'100%'}} alt="" />
    </div>
  );
};
