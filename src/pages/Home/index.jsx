import CreatePost from "../../components/Post/CreatePost";
import CardPost from "../../components/Post/CardPost";


function Home() {
  return (
    <div id="Home_Container" > 
      <h1 className='title'>hello vous êtes connectés</h1>
      <CreatePost />
      <h2 className='title'> Post précedents</h2>
      <CardPost />
    </div>
  );
}

export default Home;
