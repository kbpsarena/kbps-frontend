// import { useRoutes } from "react-router-dom";
// import Themeroutes from "./routes/Router";
// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// const App = () => {
//   const routing = useRoutes(Themeroutes);
//   return (
  
//   <div className="dark">{routing}</div>
  
   

//   );
// };

// export default App;
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeRoutes from './route/ThemeRouter';
import { AuthProvider } from './AuthContext';

const App = () => (
  <AuthProvider>
    <Routes>
        {ThemeRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children && route.children.map((child, index) => (
              <Route key={index} path={child.path} element={child.element} />
            ))}
          </Route>
        ))}
    </Routes>
  </AuthProvider>
);

export default App;
