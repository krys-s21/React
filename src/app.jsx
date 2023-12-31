import React from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import List from './list';
import UseReducer from './useReducer';
import UseRef from './useRef';
import UseState from './useState';
import CustomHook from './customHook';
import FetchingData from './fetchingData';
import DisplayingData from './displayingData';
import Loading from './loading';
import GraphQL from './graphQL';
import RenderProps from './renderProps';

function App() {
  return (
    <BrowserRouter>
      <Link style={{ display: 'block' }} to="/list">
        List
      </Link>
      <Link style={{ display: 'block' }} to="/useReducer">
        useReducer
      </Link>
      <Link style={{ display: 'block' }} to="/useRef">
        useRef
      </Link>
      <Link style={{ display: 'block' }} to="/useState">
        useState
      </Link>
      <Link style={{ display: 'block' }} to="/customHook">
        Custom Hook
      </Link>
      <Link style={{ display: 'block' }} to="/fetchingData">
        Fetching Data
      </Link>
      <Link style={{ display: 'block' }} to="/displayingData">
        Displaying Data
      </Link>
      <Link style={{ display: 'block' }} to="/loading">
        Loading
      </Link>
      <Link style={{ display: 'block' }} to="/graphQL">
        Fetching using GraphQL
      </Link>
      <Link style={{ display: 'block' }} to="/renderProps">
        Render Props
      </Link>
      <div style={{ marginTop: '20px', marginBottom: '5px' }}>
        Useful links:
        <br />
        <Link style={{ display: 'block' }} to="https://formik.org/">
          Formik (for react Form)
        </Link>
        <Link style={{ display: 'block' }} to="https://react-hook-form.com/">
          React Hook Form (for react Form)
        </Link>
        <Link style={{ display: 'block' }} to="https://usehooks.com/">
          useHooks (React hooks library)
        </Link>
      </div>
      <Routes>
        <Route path="/list" element={<List />} />
        <Route path="/useReducer" element={<UseReducer />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/useState" element={<UseState />} />
        <Route path="/customHook" element={<CustomHook />} />
        <Route path="/fetchingData" element={<FetchingData />} />
        <Route path="/displayingData" element={<DisplayingData />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/graphQL" element={<GraphQL />} />
        <Route path="/renderProps" element={<RenderProps />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
