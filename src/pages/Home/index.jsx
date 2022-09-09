import CardPost from "../../components/Post/CardPost";
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div id="Home_Container" > 
      <h2 className='title'> Liste des Posts</h2>
      <div className="CardPost">
        <CardPost />
      </div>
    </div>
  );
}

export default Home;
