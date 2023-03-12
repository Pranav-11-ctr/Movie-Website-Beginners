import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Cards';
//import App from './App';
import Mdata from './Sdata';

// function mcard(val)
// {
//   return (<>
//   <Card
//     imgsrc={val.imgsrc}
//     title ={val.title}
//     mname={val.mname}
//     link={val.link}
//   />
//   </>)

// }





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <h1>List Of 5 Best Movies</h1>

  {/* {Mdata.map(mcard)} */}
  {Mdata.map((val,index)=>
  {
    console.log(index)
    return (<>
  <Card
    imgsrc={val.imgsrc}
    title ={val.title}
    mname={val.mname}
    link={val.link}
  />
  </>)
  })}



  {/* <Card
    imgsrc={Mdata[0].imgsrc}
    title ={Mdata[0].title}
    mname={Mdata[0].mname}
    link={Mdata[0].link}
  />
  <Card
  
      imgsrc={Mdata[1].imgsrc}
      title ={Mdata[1].title}
      mname={Mdata[1].mname}
      link={Mdata[1].link}

  />
  <Card
  
  imgsrc={Mdata[2].imgsrc}
  title ={Mdata[2].title}
  mname={Mdata[2].mname}
  link={Mdata[2].link}

/>
<Card
  
      imgsrc={Mdata[3].imgsrc}
      title ={Mdata[3].title}
      mname={Mdata[3].mname}
      link={Mdata[3].link}

  /> */}
  </>

  // <>
  //   <div className='cards'>
  //     <div className='card'>
  //       <img src=" alt="mypic" className='card_img'/>
  //       <div className='card_info'>
  //         <span className='card__category'>A NetfLix Original Series</span>
  //         <h3 className='card_title'>Ajab Prem Ki Gajab Kahani</h3>
  //         <a href='https://www.youtube.com/watch?v=G4QcAI79Zlk' target="_blank">
  //           <button>Watch Now</button>
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // </>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

