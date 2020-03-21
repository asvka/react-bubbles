import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  
  useEffect(() => {
    axiosWithAuth()
      .get('/colors')
      .then(res => {
        console.log('res: ', res);
        console.log('res.data: ', res.data);
        setColorList(res.data);
      })
      .catch(err => {
        console.log('Error retrieving color data: ', err);
      });
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
