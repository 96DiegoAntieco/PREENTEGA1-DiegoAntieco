import NavBar from "./componentes/NavBar/NavBar";
import ItemsListContainet from "./componentes/ItemListContainer/ItemListContainer";

import "bulma/css/bulma.css";
import ProfileCard from "./componentes/ProfileCard/ProfieCard";

import NokiaImg from "./img/nokia.png";
import NokiaCelu from "./img/celuNokia.png";
import IphoneImg from "./img/iphone.png";

import "bulma/css/bulma.css";

function App() {
  return (
    <div>
      <NavBar />
      <ItemsListContainet />
      <section className="hero is-warning">
        <div className="hero-body">
          <h1 className="title is-3 ">CELULARES</h1>
        </div>
      </section>
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <ProfileCard titulo="Nokia 1100" arroba="@Nokia" img={NokiaImg} />
          </div>
          <div className="column is-4">
            <ProfileCard
              titulo="Motorola C115"
              arroba="@Motorola"
              img={NokiaCelu}
            />
          </div>
          <div className="column is-4">
            <ProfileCard titulo="Iphone 15" arroba="@Iphone" img={IphoneImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
