import './Film.css';
import Film from './Film';
import Footer from './Footer';
import './Footer.css';
import Posters from './Posters';
import Anhbia from './Anhbia';
function Home() {
  return (
    <div>
      <Film />
      <Anhbia />
      <Posters />
      <Footer />
    </div>

  );
}

export default Home;