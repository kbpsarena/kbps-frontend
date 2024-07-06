import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={Feeds} />
//         <Route path="/mainPage/:endpoint" component={MainPage} />
//       </Switch>
//     </Router>
//   );
// };



const App = () => {
  const routing = useRoutes(Themeroutes);

  return (
  
  <div className="dark">{routing}</div>
  
   

  );
};

export default App;
