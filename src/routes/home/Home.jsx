import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/ticket">Ticket page</Link>
      <Link to="/segmenta-online">Segmenta online</Link>
    </div>
  )
}

export default Home