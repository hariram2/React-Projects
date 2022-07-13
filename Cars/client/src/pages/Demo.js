import React from 'react';
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';

function App() {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [Kilometer, setKilometer] = useState(0)
    const [cartype, setCartype] = useState("")
    const [year, setYear] = useState(0)
  
    useEffect(() => {
      Axios.get("http://localhost:3001/api/getUsers").then((response) => {
        setListOfUsers(response.data)
      });
    }, []);
  
    const createUser = () =>{
      Axios.post("http://localhost:3001/api/createUser", {name, price, Kilometer, cartype, year}).then((response) =>{
        // alert("user created successfully");
        setListOfUsers([...listOfUsers, {name, price, Kilometer, cartype, year}]);
      });
    };
  
    return (
        <div className="App" style={{textAlign:"center"}}>

            {/* <div style={{margin:"100px 0"}}>
                <input type="text" placeholder="Car Name" onChange={(event) =>{setName(event.target.value);}}/>
                <input type="number" placeholder="Price" onChange={(event) =>{setPrice(event.target.value);}}/>
                <input type="number" placeholder="Kilometer" onChange={(event) =>{setKilometer(event.target.value);}}/>
                <input type="text" placeholder="Car Type" onChange={(event) =>{setCartype(event.target.value);}}/>
                <input type="number" placeholder="Year" onChange={(event) =>{setYear(event.target.value);}}/>
                <button onClick={createUser}>Creat User</button>
            </div> */}

       

            <div className="usersDisplay" style={{margin:"60px 0 0 200px"}}>
                <div className="col-xxl-10">
                                        
                    <div className="card card-xxl-stretch mb-5 mb-xl-8">
                    
                        <div className="card-header border-0 pt-5">
                            <h3 className="card-title align-items-start flex-column">
                                <span className="card-label fw-bolder fs-3 mb-1">Car List</span>
                                <span className="text-muted mt-1 fw-bold fs-7">Uploaded cars</span>
                            </h3>
                            
                        </div>
                
                        <div className="card-body py-3">
                        
                            <div className="table-responsive">


                                {/* {listOfUsers.map((user) => {
                                    return (
                                        <div>
                                            <h2>Name: {user.name}</h2>
                                            <h2>Age: {user.age}</h2>
                                            <h2>Username: {user.username}</h2>
                                        </div>
                                    );
                                })} */}
                                                                   
                                <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                               
                                    <thead>
                                        <tr className="fw-bolder text-muted">
                                            <th className="w-25px">
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input className="form-check-input" type="checkbox" value="1" data-kt-check="true" data-kt-check-target=".widget-9-check" />
                                                </div>
                                            </th>
                                            <th className="min-w-150px">Car Name</th>
                                            <th className="min-w-140px">Price</th>
                                            <th className="min-w-120px">Kilometer</th>
                                            <th className="min-w-120px">Car Type</th>
                                            <th className="min-w-120px">Year</th>
                                            <th className="min-w-100px text-end">Actions</th>
                                        </tr>
                                    </thead>
                                    {listOfUsers.map((user) => {
                                            return (
                                                <React.Fragment> 
                                    <tbody>
                                      
                                        <tr>
                                        
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input className="form-check-input widget-9-check" type="checkbox" value="1" />
                                                </div>
                                            </td>

                                            <td>
                                                <h2>{user.name}</h2>
                                            </td>

                                            <td>
                                                <h2>{user.price}</h2>
                                            </td>

                                            <td>
                                                <h2>{user.Kilometer}</h2>
                                            </td>

                                            <td>
                                                <h2>{user.cartype}</h2>
                                            </td>

                                            <td className="text-end">
                                                <h2>{user.year}</h2>
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-end flex-shrink-0">
                                                    <Link href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                    
                                                        <span className="svg-icon svg-icon-3">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="black" />
                                                                <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                        
                                                    </Link>
                                                    <Link href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                
                                                        <span className="svg-icon svg-icon-3">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black" />
                                                                <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                        
                                                    </Link>
                                                    <Link href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                
                                                        <span className="svg-icon svg-icon-3">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black" />
                                                                <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black" />
                                                                <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                        
                                                    </Link>
                                                </div>
                                            </td>
                               
                                        </tr>
                                
                                    </tbody>
                                    </React.Fragment>
                                  );
                              })} 
                                </table>
                                  
                                                  
                             
                            </div>
                        
                        </div>
                    
                    </div>
                </div>
            </div>
  
            <div className="uc__mern_app">
            <div className="container card">
                <h5>Add Car</h5>
                
                <div className="card-block">
                    {/* <form className="form-horizontal form-label-left" enctype="multipart/form-data" method="POST"> */}
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Car Name</label>
                            <div class="col-sm-10">
                                <input type="text" className="form-control" onChange={(event) =>{setName(event.target.value);}}/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Car Price</label>
                            <div class="col-sm-10">
                                <input type="text" className="form-control" onChange={(event) =>{setPrice(event.target.value);}}/>
                            </div>
                        </div>
                        
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Kilometer</label>
                            <div class="col-sm-10">
                                <input type="text" className="form-control" onChange={(event) =>{setKilometer(event.target.value);}}/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Car Type</label>
                            <div class="col-sm-10">
                                <input type="text" className="form-control" onChange={(event) =>{setCartype(event.target.value);}}/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Year</label>
                            <div class="col-sm-10">
                                <input type="text" className="form-control" onChange={(event) =>{setYear(event.target.value);}} />
                            </div>
                        </div>
                        <button onClick={createUser}>Submit</button>
                    {/* </form> */}
                    
                </div>
            </div>
        </div>

        
        </div>
  
      
    );
  }

  export default App;