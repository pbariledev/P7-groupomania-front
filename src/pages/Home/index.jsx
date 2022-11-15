import CardPost from "../../components/Post/CardPost";


function Home() {
  return (
    <div id="Home_Container" > 
      <h1 className='title'> Liste des Posts</h1>
      <div className="CardPost">
        <CardPost />
      </div>
    </div>
  );
}

export default Home;
