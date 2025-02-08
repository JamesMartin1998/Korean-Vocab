import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className='Home'>
        <Link to={"vocab"}>Vocab</Link>
        <Link to={"grammar"}>Grammar</Link>
    </div>
  )
}

export default Home