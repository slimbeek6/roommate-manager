import React, {useState, useEffect} from "react";
import API from "../utils/API";





const PrivateLanding = function () {
    // Establish stately variables and functionality to import home data to the landing
    const [chores, setChores] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [events, setEvents] = useState([]);
    const [users, setUsers] = useState([]);


    // Get and set the current home id
    const getHomeId = function() {
        const homeId = currentUser.id;
        return homeId;
    }

    let HomeId = getHomeId();

    // Use our API calls to pull in all of the relevant data
    useEffect(() => {
        API.getEvents(HomeId)
          .then(events => {
            setEvents(events.data)
          }).catch(err => console.error(err))
        API.getChores(HomeId)
          .then(chores => {
            setChores(chores.data)
          }).catch(err => console.error(err))
        API.getExpenses(HomeId)
          .then(expenses => {
            setExpenses(expenses.data)
          }).catch(err => console.error(err))
        API.getUsers(HomeId)
        .then(users => {
          setUsers(users.data)
        }).catch(err => console.error(err))
    }, [])
    
    // Reduce the number of items to ensure a clean display on the landing page
    const limitedEvents = events.slice(0, 5).map(item => {
    return item;
    })
    const limitedExpenses = expenses.slice(0, 5).map(item => {
    return item;
    })
    const limitedChores = chores.slice(0, 5).map(item => {
    return item;
    })


    // Return the html with the card components utilizing our API called data
    return (
        <div className="container-fluid m-0">
            <header className="jumbotron whiteBG blue mx-5 px-5 justify-content-center d-flex">
                <div className="row">
                    <div className="col-4 d-flex">
                        <img className="img-fluid mx-auto" src="/assets/img/Brand/UnderOneRoof.jpg" />
                    </div>
            
                    <div className="col-8 pt-5">
                        <h2 className="large display-3">{currentUser.username}</h2>
                        <h4 className="medium mt-4 red">Summary"</h4>
                    </div>
                </div>
            </header>

            <div className="row justify-content-around m-5">
                <div className="col-xl-4 col-lg-5 col-sm-7">
                    <ChoresCard list={limitedChores} heading="Chores Due" />
                </div>
                
                <div className="col-xl-4 col-lg-5 col-sm-7">
                    <EventsCard list={limitedEvents} heading="Upcoming Events" />
                </div>
                
                <div className="col-xl-4 col-lg-5 col-sm-7">
                    <ExpensesCard list={limitedExpenses} heading="Recent Expenses" />
                </div>  
            </div>

            <div className="row justify-content-around m-5">
                <h2 className="col-12 large text-center mt-4 display-4 blue bold">Roommate Contact List</h2>
                    <ContactCard list={users} />
            </div>
        </div>
    );
};

export default PrivateLanding;