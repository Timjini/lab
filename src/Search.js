import React, {useState} from 'react';
import Data from './data.json';
import './App.css';


const Search = () => {
    const [query, setQuery] = useState("")

    return (
      
    <div>
      <input className='search-box' placeholder='Search Posts' onChange={event => setQuery(event.target.value)} />
      <div className='search-container'>
        
        {Data.filter(post => {
          if(query === ""){
            return post;
          } else if (post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())){
            return post;
          }
        })
        .map((post,index) =>
        <div key={index}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
          )}
      </div> 
    </div>
    )  

}

export default Search;