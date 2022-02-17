import React, { useState, useEffect } from "react";
// import ProfileCard from "../components/ProfileCard";
// import ProfileForm from "../components/ProfileForm";
import Header from '../components/Header';
import AuthService from "../services/auth.service";
import API from "../utils/API";

const UserDashboard = function () {
  const currentHome = AuthService.getCurrentHome();
  const [displayForm, setDisplayForm] = useState(false);
  const [users, setUsers] = useState([]);

  const getHomeId = () => {
    const HomeId = currentHome.id;
    return HomeId;
  }

  let HomeId = getHomeId();

  useEffect(() => {
    API.getUsers(HomeId)
      .then(results => {
        setUsers(results.data)
      }).catch(err => console.error(err))
  }, [])

  const hideForm = () => {
    setDisplayForm(false)
  }
  const showForm = () => {
    setDisplayForm(true)
  }

  if (displayForm) {
    return (
        <>
          {/* <ProfileForm hideForm={hideForm} /> */}
        </>
    )
  } else {
    return (
        <>
          <Header />
          {/* <ProfileCard showForm={showForm} users={users} /> */}
        </>
    )
  }
};

export default UserDashboard;