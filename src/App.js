
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <h1 style={{backgroundColor:'lightpink', padding: '20px', textAlign:'center'}}>Posts</h1>
      <LoadPosts></LoadPosts>
      </div>
      <h1 style={{backgroundColor:'lightpink', padding: '20px', textAlign:'center'}}>District Data</h1>
      <div className="App" style={divStyles}>
      <District name="Chittagong" speciality="Cox's Bazar"></District>
     <District name="Cumilla" speciality="Moynamoti"></District>
     <District name="Sylet" speciality="Jaflong"></District>
      </div>
    </div>
  );
}

const divStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '15px',
  padding: '20px',
  margin: '15px',
  borderRadius: '20px',
}

function LoadPosts() {

  const [posts, setPosts]  = useState([])

  useEffect(()=> {

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(data=>setPosts(data))

  }, [])

  return (
    <div style={divStyles}>
      {
        posts.map(post=> <Post post={post}></Post> )
      }
    </div>
  )
}

function Post (props) {
  return (
   <div>
      <div style={{backgroundColor: 'bisque', borderRadius: '20px', padding:'20px', textAlign:'center'}}>
      <h3>Id: {props.post.id}</h3>
      <h3>Title: {props.post.title}</h3>
      <p>Body: {props.post.body}</p>
    </div>
   </div>
  )
}




function District (props) {

    const [power, setPower] = useState(1);
    const boostPower = () => {
      const newPower = power * 2;
      setPower(newPower);
    }

  return (
    <div style={{backgroundColor: 'bisque', borderRadius: '20px', padding:'20px'}}>
      <h4 style={{background: 'lightBlue', padding:'10px', borderRadius:'20px'}}>Name: {props.name}</h4>
      <p>Speciality: {props.speciality}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower} style={{fontSize: '15px', padding: '15px', backgroundColor:'lightGrey', borderRadius: '20px'}}>Boost The power</button>
    </div>
  )
}

export default App;
