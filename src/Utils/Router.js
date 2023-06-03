import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Error from './Error';
import EmployeeCreate from '../Pages/EmployeeCreate';
import EmployeeList from '../Pages/EmployeeList';

const Router = () => {
    return (
        <div>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<EmployeeCreate/>}/>
            <Route path="/employee-list" element={<EmployeeList/>}/>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
        </div>
    );
};

export default Router;