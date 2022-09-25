import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { getDefaultNormalizer } from '@testing-library/react';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Slider from './components/Slider';
import {Routes, Route} from "react-router-dom"
import Carousell from './components/Carousell';
import Home from './components/Home';
import Movie from './components/Movie';

function App() {
    return (
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="movie/:id" element={<Movie/>} />
      </Routes>
    );
}

export default App;