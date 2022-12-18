import './App.css';
import agile from "../src/images/agile.png";
import click from "../src/images/click.png";
import deadline from "../src/images/deadline.png";
import menu from "../src/images/menu.png";
import open from "../src/images/open.png";
import pc from "../src/images/pc.png";
import "../src/component/style.css";
function App() {
  return (
    <div className="App">
      <header>
      <nav>
        <div class="left-nav">
          <a href="#">Business Types</a>
          <a href="#">Product</a>
        </div>

        <div class="center-nav">
          <img width="60px" src={menu} alt="menu" />
        </div>

        <div class="right-nav">
          <a href="#">Login</a>
        </div>
      </nav>
    </header>

    <main>
      <div class="main">
        <div class="left-main">
          <p>Square Capital</p>
          <br />
          <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            ri culpa necessitatibus volu  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
            voluptas facere soluta libero rem
          </h2>
        </div>

        <div class="right-main">
          <img width="540px" src={pc} alt="pc" />
        </div>
      </div>
    </main>

    <footer>

      <section class="top-footer">
        <div class="top-left-footer">
            <p>Overview</p>
            <p>How it works</p>
            <p>Testimonials</p>
        </div>

        <div>
          <button type="submit">SIGN UP FOR SQUARE</button>
        </div>

      </section>

      <hr />

      <section class="bottom-footer">
        <div class="open">
          <img width="100px" src={open} alt="Open" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
            excepturi culpa necessitatibus volu  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
            voluptas facere soluta libero rem
          </p>
        </div>

        <div class="fast">
          <img width="100px" src={deadline} alt="deadline" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
            voluptas facere soluta libero rem  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
            voluptas facere soluta libero rem
          </p>
        </div>

        <div class="easy">
          <img width="100px" src={agile} alt="easy" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            in quae reprehenderit sit  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
            voluptas facere soluta libero rem
          </p>
        </div>

        <div class="flexible">
          <img width="100px" src={agile} alt="agile" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            odit quos temporibus hic omnis  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
            voluptas facere soluta libero rem
          </p>
        </div>
      </section>
    </footer>

    </div>
  );
}

export default App;
