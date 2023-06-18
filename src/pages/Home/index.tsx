import Navbar_ from '../../component/barraNavegacao';
import './styles.css'

function Home() {
    return (
       <section>
           <header>
               <Navbar_/>
           </header>
           <main>
           <div className="text">
                    <h1><strong>Atlantis-Water-Park</strong></h1>
               </div>
               <div className="text-box">
                    <strong>
                        Bem vindo ao Atlantis Water Park!
                        <br></br>
                        Parque aquatico tematico sobre a cidade de Atlântida!
                    </strong>
                </div>
                <div> 
                    <p>Desenvolvido por Ocean Solutions</p>
                    </div>
           </main>
       </section>
    );
}
export default Home;