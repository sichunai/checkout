import { Routes, Route } from "react-router-dom";
import ShowList from "./components/show-list/index";
import CheckoutForm from "./components/checkout-form/index";

const App = () => {
  const shows = [
    {
      id: 1,
      title: "Cats - The Musical",
      date: "06/04/2023",
      location: "Broadway Theater",
      price: 85,
    },
    {
      id: 2,
      title: "Taylor Swift Eras Tour",
      date: "06/04/2023",
      location: "MetLife Stadium",
      price: 250,
    },
    {
      id: 3,
      title: "US Open 1st Round",
      date: "06/04/2023",
      location: "Grandstand Flushing",
      price: 100,
    },
    {
      id: 4,
      title: "John Summit",
      date: "06/04/2023",
      location: "Brooklyn Mirage",
      price: 70,
    },
    {
      id: 5,
      title: "Jerry Seinfeld",
      date: "06/04/2023",
      location: "Madison Square Garden",
      price: 50,
    },
  ];
  return (
    <Routes>
      <Route path="/" element={<ShowList shows={shows} />}></Route>
      <Route path="/checkout/" element={<CheckoutForm />}></Route>
    </Routes>
  );
};

export default App;
