//1)importamos las libreriasReact y ReactDOM

import React from "react";
//la libreria define que es un componente y como los componentes trabajan entre si
import ReactDOM from "react-dom/client";
//la libreria que sabe como hacer que un componente aparezca en la pantalla del usuario

//(importar conponentes)
import App from "./App";

//2) obtener una referencia al div con id "root"
const el = document.getElementById("root");
//3) le decimos a react que tome el control del elemento
const root = ReactDOM.createRoot(el);

root.render(<App />);
