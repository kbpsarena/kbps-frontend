// import React from "react";
// import {
//   Card,
//   CardBody,
//   CardTitle,
//   ListGroup,
//   CardSubtitle,
//   ListGroupItem,
//   Button,
// } from "reactstrap";

// const FeedData = [
//   {
//     title: "AUS vs IND",
//     icon: "bi bi-bell",
//     color: "primary",
//     date: "16/12/2024",
//     time: "8:30pm",
//   },
//   {
//     title: "AUS vs IND",
//     icon: "bi bi-bell",
//     color: "primary",
//     date: "16/12/2024",
//     time: "8:30pm",
//   },
//   {
//     title: "AUS vs IND",
//     icon: "bi bi-bell",
//     color: "primary",
//     date: "16/12/2024",
//     time: "8:30pm",
//   },
//   {
//     title: "AUS vs IND",
//     icon: "bi bi-bell",
//     color: "primary",
//     date: "16/12/2024",
//     time: "8:30pm",
//   },
//   {
//     title: "AUS vs IND",
//     icon: "bi bi-bell",
//     color: "primary",
//     date: "16/12/2024",
//     time: "8:30pm",
//   },
//   {
//     title: "AUS vs IND",
//     icon: "bi bi-bell",
//     color: "primary",
//     date: "16/12/2024",
//     time: "8:30pm",
//   },
//   {
//     title: "AUS vs IND",
//     icon: "bi bi-bell",
//     color: "primary",
//     date: "16/12/2024",
//     time: "8:30pm",
//   },
//   {
//     title: "AUS vs IND",
//     icon: "bi bi-bell",
//     color: "primary",
//     date: "16/12/2024",
//     time: "8:30pm",
//   },

//   {
//     title: "AUS vs IND",
//     icon: "bi bi-bell",
//     color: "primary",
//     date: "16/12/2024",
//     time: "8:30pm",
//   },
//   {
//     title: "AUS vs IND",
//     icon: "bi bi-bell",
//     color: "primary",
//     date: "16/12/2024",
//     time: "8:30pm",
//   },
  
//   // {
//   //   title: "Cras justo odio",
//   //   icon: "bi bi-bell",
//   //   color: "primary",
//   //   date: "6 minute ago",
//   // },
//   // {
//   //   title: "New user registered.",
//   //   icon: "bi bi-person",
//   //   color: "info",
//   //   date: "6 minute ago",
//   // },
//   // {
//   //   title: "Server #1 overloaded.",
//   //   icon: "bi bi-hdd",
//   //   color: "danger",
//   //   date: "6 minute ago",
//   // },
//   // {
//   //   title: "New order received.",
//   //   icon: "bi bi-bag-check",
//   //   color: "success",
//   //   date: "6 minute ago",
//   // },
//   // {
//   //   title: "Cras justo odio",
//   //   icon: "bi bi-bell",
//   //   color: "dark",
//   //   date: "6 minute ago",
//   // },
//   // {
//   //   title: "Server #1 overloaded.",
//   //   icon: "bi bi-hdd",
//   //   color: "warning",
//   //   date: "6 minute ago",
//   // },
//   // {
//   //   title: "Cras justo odio",
//   //   icon: "bi bi-bell",
//   //   color: "primary",
//   //   date: "6 minute ago",
//   // },
//   // {
//   //   title: "New user registered.",
//   //   icon: "bi bi-person",
//   //   color: "info",
//   //   date: "6 minute ago",
//   // },
//   // {
//   //   title: "Server #1 overloaded.",
//   //   icon: "bi bi-hdd",
//   //   color: "danger",
//   //   date: "6 minute ago",
//   // },
//   // {
//   //   title: "Cras justo odio",
//   //   icon: "bi bi-bell",
//   //   color: "primary",
//   //   date: "6 minute ago",
//   // },
//   // {
//   //   title: "New user registered.",
//   //   icon: "bi bi-person",
//   //   color: "info",
//   //   date: "6 minute ago",
//   // },
//   {
//     title: "Server #1 overloaded.",
//     icon: "bi bi-hdd",
//     color: "danger",
//     date: "6 minute ago",
//     time: "8:30pm",
//   },
//   {
//     title: "Cras justo odio",
//     icon: "bi bi-bell",
//     color: "primary",
//     date: "6 minute ago",
//     time: "8:30pm",
//   },
//   // {
//   //   title: "New user registered.",
//   //   icon: "bi bi-person",
//   //   color: "info",
//   //   date: "6 minute ago",
//   // },
//   // {
//   //   title: "Server #1 overloaded.",
//   //   icon: "bi bi-hdd",
//   //   color: "danger",
//   //   date: "6 minute ago",
//   // },
//   // {
//   //   title: "Cras justo odio",
//   //   icon: "bi bi-bell",
//   //   color: "primary",
//   //   date: "6 minute ago",
//   // },
//   // {
//   //   title: "New user registered.",
//   //   icon: "bi bi-person",
//   //   color: "info",
//   //   date: "6 minute ago",
//   // },
//   // {
//   //   title: "Server #1 overloaded.",
//   //   icon: "bi bi-hdd",
//   //   color: "danger",
//   //   date: "6 minute ago",
//   // },
//   // {
//   //   title: "Cras justo odio",
//   //   icon: "bi bi-bell",
//   //   color: "primary",
//   //   date: "6 minute ago",
//   // },
//   // {
//   //   title: "New user registered.",
//   //   icon: "bi bi-person",
//   //   color: "info",
//   //   date: "6 minute ago",
//   // },
//   // {
//   //   title: "Server #1 overloaded.",
//   //   icon: "bi bi-hdd",
//   //   color: "danger",
//   //   date: "6 minute ago",
//   // },
//   // {
//   //   title: "Cras justo odio",
//   //   icon: "bi bi-bell",
//   //   color: "primary",
//   //   date: "6 minute ago",
//   // },
//   // {
//   //   title: "New user registered.",
//   //   icon: "bi bi-person",
//   //   color: "info",
//   //   date: "6 minute ago",
//   // },
//   // {
//   //   title: "Server #1 overloaded.",
//   //   icon: "bi bi-hdd",
//   //   color: "danger",
//   //   date: "6 minute ago",
//   // },
// ];

// const Feeds = () => {
//   return (
//     <Card>
//       <CardBody>
//         <CardTitle tag="h5">MATCHES</CardTitle>
//         <CardSubtitle className="mb-2 text-muted" tag="h6">
//           Widget you can use
//         </CardSubtitle>
//         <ListGroup flush className="mt-4">
//           {FeedData.map((feed, index) => (
//             <ListGroupItem
//               key={index}
//               action
//               href="/"
//               tag="a"
//               className="d-flex align-items-center p-3 border-0"
//             >
//               <Button
//                 className="rounded-circle me-3"
//                 size="sm"
//                 color={feed.color}
//               >
//                 <i className={feed.icon}></i>
//               </Button>
//               <div classname="container " size="12">
//                 {feed.title}
//                 </div>
              
//               <small className="ms-auto text-muted text-small">
//                 {feed.date}
//               </small>
//               <small className="ms-auto text-muted text-small" >
//                 {feed.time}
//               </small>
              
//             </ListGroupItem>
//           ))}
//         </ListGroup>
//       </CardBody>
//     </Card>
//   );
// };

// export default Feeds;














import React from "react";
import { Card, CardBody, CardTitle, ListGroup, CardSubtitle, ListGroupItem,Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

const FeedData = [
  {
    title: "AUS vs IND",
    icon: "bi bi-bell",
    color: "primary",
    date: "16/12/2024",
    time: "8:30pm",
    href:"/starter/mainPage"
  },
  // ... (other items)
  {
    title: "Server #1 overloaded.",
    icon: "bi bi-hdd",
    color: "danger",
    date: "6 minute ago",
    time: "8:30pm",
    href:"/mainPage"
  },
  {
    title: "Cras justo odio",
    icon: "bi bi-bell",
    color: "primary",
    date: "6 minute ago",
    time: "8:30pm",
    href:"/mainPage"
  },
];

const Feeds = () => {
  const history = useNavigate();


  let location = useLocation();
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">MATCHES</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Widget you can use
        </CardSubtitle>
        <ListGroup flush className="mt-4">
          {FeedData.map((feed, index) => (
            <ListGroupItem key={index} className="d-flex align-items-center p-3 border-0">
            <Link
              to={feed.href}
              className={
                location.pathname === feed.href
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
            >
              <i className={feed.icon}></i>
              <span className="ms-3 d-inline-block">{feed.title}</span>
            </Link>
          </ListGroupItem>
            // <ListGroupItem
            //   key={index}
            //   action
            //   onClick={() => handleRedirect("")}  // replace "mainData" with appropriate endpoint if needed
            //   tag="button"
            //   className="d-flex align-items-center p-3 border-0"
            // >
            //   <div className="d-flex align-items-center">
            //     <Button className="rounded-circle me-3" size="sm" color={feed.color}>
            //       <i className={feed.icon}></i>
            //     </Button>
            //     <div className="container">
            //       {feed.title}
            //     </div>
            //     <small className="ms-auto text-muted text-small">
            //       {feed.date}
            //     </small>
            //     <small className="ms-auto text-muted text-small">
            //       {feed.time}
            //     </small>
            //   </div>
            // </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;




