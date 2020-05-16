import React from 'react';
import PropTypes from 'prop-types'

function Food({name, picture, rating}){
  return (
    <div>
      <h1>I love {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

const foodArray = [
  {
    id:"1",
    name: "kimch",
    picture: "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile4.uf.tistory.com%2Fimage%2F2164B93656404366065143",
    rating: 4.8
  },
  {
    id:"2",
    name: "kimbab",
    picture: "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile4.uf.tistory.com%2Fimage%2F2164B93656404366065143",
    rating: 3.5
  },
  {
    id:"3",
    name: "cheese",
    picture: "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile4.uf.tistory.com%2Fimage%2F2164B93656404366065143",
    rating: 4.3
  },
  {
    id:"4",
    name: "spam",
    picture: "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile4.uf.tistory.com%2Fimage%2F2164B93656404366065143",
    rating: 2.4
  },
  {
    id:"5",
    name: "egg",
    picture: "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile4.uf.tistory.com%2Fimage%2F2164B93656404366065143",
    rating: 3.4
  },
]

function renderFood (item) {
  return <Food key={item.id} name={item.name} picture={item.picture} rating={item.rating}/>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodArray.map(renderFood)}
    </div>
  );
}

export default App;
