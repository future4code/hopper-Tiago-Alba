import React, {BrowserRouter,Routes,Route}  from "react-router-dom";
import styled from "styled-components";
import ListTrips from "./Paginas/ListTripsPage"
import Home from "./Paginas/HomePage"
import ApplicationForm from "./Paginas/ApplicationFormPage";
import LoginPage from "./Paginas/LoginPage";
import TripDatail from "./Paginas/TripDatailsPage";
import CreateTripPage from "./Paginas/CreateTripPage";
import AdminHome from "./Paginas/AdminHomePage"
import { UserProtector } from "./components/userProtector";
const MainContainer = styled.div`

`
export default function App(){

  return(
    <MainContainer>
     <BrowserRouter>
     <Routes>
      <Route path={"/"} element={<Home/>} />
      <Route path={"/trips/list"} element={<ListTrips/>} />
      <Route path={"/trips/application"} element={<ApplicationForm/>} />
      <Route path={"/login"} element={<LoginPage/>} />
      <Route path={"/admin/trips/list"} element={<TripDatail/>} />
      <Route path={"/admin/trips/create"} element={<CreateTripPage/>} />
      <Route path={"/adimin/trips/:id"} element={<AdminHome/>} />
     </Routes>
     </BrowserRouter>
    </MainContainer>
  )

}