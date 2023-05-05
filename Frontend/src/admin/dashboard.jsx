
// import React, { useEffect, useState } from 'react'
// import "./Dashboard.css"
// import { useDispatch,useSelector } from "react-redux";
// import { DeleteProduct, getProducts } from './Adminredux/action';
// import { RiEdit2Fill } from "react-icons/ri";
// import { MdDelete } from "react-icons/md";
// import { Button, Input} from '@chakra-ui/react'
// import { AddProduct } from './Adminredux/action';
// import { Link } from 'react-router-dom';
// import { AuthContext } from './logAdmin/useContext/AuthContext';
// import { useContext } from 'react';




// export const Dashboard = () => {
// const [render,setRender]=useState(false)
// const store=useSelector((store)=>{
   
//     return store 
// })

// let dispatch=useDispatch()
// useEffect(()=>{
// dispatch(getProducts())
// },[render])


// const Auth=useContext(AuthContext)

// console.log(Auth)

// const [addform,SetAddForm]=useState({

//         id: "",
//         image: "",
//         image2: "",
//         color: "",
//         name: "",
//         price: ""

// })

// const HandelAddForm=(e)=>{
//     SetAddForm({...addform,[e.target.name]:e.target.value})
// }



// const handelAddFormsubmit=(e)=>{
//  e.preventDefault()
//  let obj={
//     ...addform
//  }

//  dispatch(AddProduct(obj)).then((res)=>{
//     setRender(!render)
    
//  })
// SetAddForm({

//     id: "",
//     image: "",
//     image2: "",
//     color: "",
//     name: "",
//     price: ""
// })
// }

// const HandelDeleteClick=(id)=>{
//   dispatch(DeleteProduct(id)).then(()=>{
//     setRender(!render)
//   })
// }





//   return (
//     <div>


// <body id="page-top" >

//     {/* <!-- Page Wrapper --> */}
//     <div id="wrapper" 
//     style={{
//         backgroundColor:"#8EC3B0"
//     }}
//     >

//         {/* <!-- Sidebar --> */}
//         <ul style={{marginTop:"80px", backgroundColor:"#393053"}} className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">



//             {/* <!-- Divider --> */}
//             <hr className="sidebar-divider my-0"/>

//             {/* <!-- Nav Item - Dashboard --> */}
//             <li className="nav-item active"  >
//                 <a className="nav-link" href="index.html">
//                     <i className="fas fa-fw fa-tachometer-alt"></i>
//                     <span>Dashboard</span></a>
//             </li>

//             {/* <!-- Divider --> */}
//             <hr className="sidebar-divider"/>


//             {/* <!-- Nav Item - Pages Collapse Menu --> */}
//             <li className="nav-item">
//                 <a className="nav-link collapsed" href="" data-toggle="collapse" data-target="#collapsePages"
//                     aria-expanded="true" aria-controls="collapsePages">
//                     <i className="fas fa-fw fa-folder"></i>
//                     <span>Log In</span>
//                 </a>
//                 <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
//                     <div className="bg-white py-2 collapse-inner rounded">
//                         <h6 className="collapse-header">Login Screens:</h6>
//                         <Link className="collapse-item" to="/AdminLogin">Login</Link>
                       
//                         <Link className="collapse-item" href="">Forgot Password</Link>
//                         <Link className="collapse-item" href="" onClick={()=>{
//                             Auth.setState(false)
//                         }}>LogOut</Link>
//                         <div className="collapse-divider"></div>

//                     </div>
//                 </div>
//             </li>

//             {/* <!-- Nav Item - Charts --> */}
//             <li className="nav-item">
//                 <a className="nav-link" href="/AdminDashboard">
//                     <i className="fas fa-fw fa-chart-area"></i>
//                     <span onClick={()=>{
//                         alert("Edit From Product OverView")
//                     }}>Edit</span></a>
//             </li>

//             {/* <!-- Nav Item - Tables --> */}
//             <li className="nav-item">
//                 <a className="nav-link" href="">
//                     <i className="fas fa-fw fa-table"></i>
//                     <span>Track Product Delivery</span></a>
//             </li>

//             {/* <!-- Divider --> */}
//             <hr className="sidebar-divider d-none d-md-block"/>

//             {/* <!-- Sidebar Toggler (Sidebar) --> */}
//             <div className="text-center d-none d-md-inline">
//                 <button className="rounded-circle border-0" id="sidebarToggle">R</button>
//             </div>

//             {/* <!-- Sidebar Message --> */}
//             <div className="sidebar-card d-none d-lg-flex">
//                 <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."/>
//                 <p className="text-center mb-2"><strong> Admin Pannel</strong> </p>
//                 <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
//             </div>

//         </ul>
//         {/* <!-- End of Sidebar --> */}

//         {/* <!-- Content Wrapper --> */}
//         <div id="content-wrapper" className="d-flex flex-column" style={{
//        backgroundColor:"#DEFCF9"
//     }}>

//             {/* <!-- Main Content --> */}
//             <div id="content">

//                 {/* <!-- Topbar --> */}
        
//                 {/* <!-- End of Topbar --> */}

//                 {/* <!-- Begin Page Content --> */}
//                 <div className="container-fluid" >

//                     {/* <!-- Page Heading --> */}
           

//                     {/* <!-- Content Row --> */}
//                     <div className="row" style={{marginTop:"40px" ,backgroundColor:"#C7E8CA"}}>

//                         {/* <!-- Earnings (Monthly) Card Example --> */}
//                         <div className="col-xl-3 col-md-6 mb-4">
//                             <div className="card border-left-primary shadow h-100 py-2" style={{backgroundColor:"#393053" }}>
//                                 <div className="card-body" >
//                                     <div className="row no-gutters align-items-center">
//                                         <div className="col mr-2" >
//                                             <div className="text-xs font-weight-bold text-primary text-uppercase mb-1" >
//                                                 Earnings (Monthly)</div>
//                                             <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
//                                         </div>
//                                         <div className="col-auto">
//                                             <i className="fas fa-calendar fa-2x text-gray-300" ></i>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* <!-- Earnings (Monthly) Card Example --> */}
//                         <div className="col-xl-3 col-md-6 mb-4">
//                             <div className="card border-left-success shadow h-100 py-2" style={{backgroundColor:"#443C68" }}>
//                                 <div className="card-body">
//                                     <div className="row no-gutters align-items-center">
//                                         <div className="col mr-2">
//                                             <div className="text-xs font-weight-bold text-success text-uppercase mb-1" style={{color:"blue" }}>
//                                                 Earnings (Annual)</div>
//                                             <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
//                                         </div>
//                                         <div className="col-auto">
//                                             <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* <!-- Earnings (Monthly) Card Example --> */}
//                         <div className="col-xl-3 col-md-6 mb-4">
//                             <div className="card border-left-info shadow h-100 py-2"  style={{backgroundColor:"#443C68"}}>
//                                 <div className="card-body">
//                                     <div className="row no-gutters align-items-center">
//                                         <div className="col mr-2">
//                                             <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
//                                             </div>
//                                             <div className="row no-gutters align-items-center">
//                                                 <div className="col-auto">
//                                                     <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
//                                                 </div>
//                                                 <div className="col">
//                                                     <div className="progress progress-sm mr-2">
//                                                         <div className="progress-bar bg-info st1" role="progressbar"></div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="col-auto">
//                                             <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* <!-- Pending Requests Card Example --> */}
//                         <div className="col-xl-3 col-md-6 mb-4">
//                             <div className="card border-left-warning shadow h-100 py-2"  style={{  backgroundColor:"#393053"}}>
//                                 <div className="card-body">
//                                     <div className="row no-gutters align-items-center">
//                                         <div className="col mr-2">
//                                             <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
//                                                 Pending Requests</div>
//                                             <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
//                                         </div>
//                                         <div className="col-auto">
//                                             <i className="fas fa-comments fa-2x text-gray-300"></i>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* <!-- Content Row --> */}

//                     <div className="row">

//                         {/* <!-- Area Chart --> */}
//                         <div className="col-xl-8 col-lg-7">
//                             <div className="card shadow mb-4">
//                                 {/* <!-- Card Header - Dropdown --> */}
//                                 <div
//                                     className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
//                                     <h6 className="m-0 font-weight-bold text-primary">{Auth?"Log In To See OverView":"Products Overview"}</h6>
//                                     <div className="dropdown no-arrow">
//                                         <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
//                                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                             <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
//                                         </a>
//                                         <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
//                                             aria-labelledby="dropdownMenuLink">
//                                             <div className="dropdown-header">AdminCheck:</div>
//                                             <a className="dropdown-item" href="#">See</a>
//                                             <a className="dropdown-item" href="#">Think</a>
//                                             <div className="dropdown-divider"></div>
//                                             <a className="dropdown-item" href="#">Delete </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* <!-- Card Body --> */}
//                                 <div className="card-body">
//                                     <div className="chart-area">
//                                     {
//                                        Auth.state? store.reducer.isLoading?"Loading....": <table 
//                                         className="table" 
//                                         style={{
//                                             border: "4px solid green"
//                                         }}
                                        
//                                         >
//                                             <thead>
//                                                 <tr 
//                                                  style={{
//                                                     border: "1px solid green"
//                                                 }}>
//                                                     <th>Id</th>
//                                                      <th>Name</th>
//                                                      <th>Image</th>
//                                                      <th>Price</th>
//                                                      <th>Delete</th>
//                                                      <th>Edit</th>
//                                              </tr>
//                                             </thead>
//                                             <tbody 
                                     
//                                             >
//                                                 {
//                                                   store.reducer.products?.map((el)=>(
//                                            <tr>
//                                                     <td>{el.id}</td>
//                                                     <td>{el.name}</td>
//                                                     <td className="tableimg">{el.image.substring(0,30)}</td>
//                                                     <td>{el.price}</td>
//                                                     <td><RiEdit2Fill/></td>
//                                                     <td 
//                                                     onClick={()=>HandelDeleteClick(el.id)}
//                                                     ><MdDelete/></td>
                                              
//                                            </tr>
//                                                   )) 
//                                                 }
                                      
//                                             </tbody>
//                                         </table>:<img width="100%" src="https://forum.zeroqode.com/uploads/default/original/1X/d6165fab438f6f58263c2376bc754f0b51676887.gif"/>
//                                     }
//                                         {
                                           
//                                         } 
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* <!-- Pie Chart --> */}
//                         <div className="col-xl-4 col-lg-5">
//                             <div className="card shadow mb-4">
//                                 {/* <!-- Card Header - Dropdown --> */}
//                                 <div
//                                     className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
//                                     <h6 className="m-0 font-weight-bold text-primary">Add Product</h6>
//                                     <div className="dropdown no-arrow">
//                                         <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
//                                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                             <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
//                                         </a>
//                                         <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
//                                             aria-labelledby="dropdownMenuLink">
//                                             <div className="dropdown-header">Dropdown Header:</div>
//                                             <a className="dropdown-item" href="#">Action</a>
//                                             <a className="dropdown-item" href="#">Another action</a>
//                                             <div className="dropdown-divider"></div>
//                                             <a className="dropdown-item" href="#">Something else here</a>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* <!-- Card Body --> */}



                                

//                                 <div className="card-body" style={{height:"500px",textAlign:"center" }}>
//                                     <div className="chart-pie pt-4 pb-2" >
//                                      { Auth.state? <form action="" onSubmit={handelAddFormsubmit}>
//                                        <Input placeholder='Id' type="number" size='md' mt="10px" name="id" value={addform.id} onChange={HandelAddForm} />
//                                        <Input placeholder='image link' size='md' mt="10px" name="image" value={addform.image} onChange={HandelAddForm} />
//                                        <Input placeholder='image2 link' size='md' mt="10px" name="image2" value={addform.image2} onChange={HandelAddForm} />
//                                        <Input placeholder='color code 1 to 6' size='md' name="color" mt="10px" value={addform.color} onChange={HandelAddForm} />
//                                        <Input placeholder=' Enter The Name ' size='md' name="name" value={addform.name}  mt="10px" onChange={HandelAddForm}/>
//                                        <Input placeholder='Enter The Price' type="number" size='md' name="price" value={addform.price}  mt="10px" onChange={HandelAddForm}/>
//                                         <Button type='submit' width={"100%"} mt={"30px"} onSubmit={handelAddFormsubmit} >ADD</Button>
//                                         {/* <input type="submit" placeholder="Add" /> */}
//                                        </form>:<img src="https://i.pinimg.com/originals/7f/2d/c4/7f2dc4bac6cae40c4db5aaf35294c7f4.gif" alt="" />}
//                                     </div>
                     
//                                 </div>
//                             </div>
//                         </div>
//                     </div>











//                     {/* <!-- Content Row --> */}
//                     <div className="row">

//                         {/* <!-- Content Column --> */}
//                         <div className="col-lg-6 mb-4">

//                             {/* <!-- Project Card Example --> */}
//                             <div className="card shadow mb-4">
//                                 <div className="card-header py-3">
//                                     <h6 className="m-0 font-weight-bold text-primary">Track Data And Sales</h6>
//                                 </div>
//                                 <div className="card-body">
//                                     <h4 className="small font-weight-bold">Server Migration <span
//                                             className="float-right">20%</span></h4>
//                                     <div className="progress mb-4">
//                                         <div className="progress-bar bg-danger st2" role="progressbar" ></div>
//                                     </div>
//                                     <h4 className="small font-weight-bold">Sales Tracking <span
//                                             className="float-right">40%</span></h4>
//                                     <div className="progress mb-4">
//                                         <div className="progress-bar bg-warning st3" role="progressbar"  ></div>
//                                     </div>
//                                     <h4 className="small font-weight-bold">Customer Database <span
//                                             className="float-right">60%</span></h4>
//                                     <div className="progress mb-4">
//                                         <div className="progress-bar st4" role="progressbar" ></div>
//                                     </div>
//                                     <h4 className="small font-weight-bold">Payout Details <span
//                                             className="float-right">80%</span></h4>
//                                     <div className="progress mb-4">
//                                         <div className="progress-bar bg-info st5" role="progressbar" ></div>
//                                     </div>
//                                     <h4 className="small font-weight-bold">Account Setup <span
//                                             className="float-right">Complete!</span></h4>
//                                     <div className="progress">
//                                         <div className="progress-bar bg-success st6" role="progressbar" ></div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* <!-- Color System --> */}
//                             <div className="row">
//                                 <div className="col-lg-6 mb-4">
//                                     <div className="card bg-primary text-white shadow">
//                                         <div className="card-body">
//                                             Primary
//                                             <div className="text-white-50 small">#4e73df</div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6 mb-4">
//                                     <div className="card bg-success text-white shadow">
//                                         <div className="card-body">
//                                             Success
//                                             <div className="text-white-50 small">#1cc88a</div>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>

//                         </div>

//                         <div className="col-lg-6 mb-4">

//                             {/* <!-- Illustrations --> */}
//                             <div className="card shadow mb-4">
//                                 <div className="card-header py-3">
//                                     <h6 className="m-0 font-weight-bold text-primary">Our Aim</h6>
//                                 </div>
//                                 <div className="card-body">
//                                     <div className="text-center">
//                                         <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 st7" 
//                                             src="img/undraw_posting_photo.svg" alt="..."/>
//                                     </div>
//                                  <h2>Discover the new you.</h2>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>

//                 </div>
//                 {/* <!-- /.container-fluid --> */}

//             </div>
//             {/* <!-- End of Main Content --> */}

//             {/* <!-- Footer --> */}
//             <footer className="sticky-footer bg-white">
//                 <div className="container my-auto">
//                     <div className="copyright text-center my-auto">
//                         <span>FASHIONIX &copy;  Website 2023</span>
//                     </div>
//                 </div>
//             </footer>
//             {/* <!-- End of Footer --> */}

//         </div>
//         {/* <!-- End of Content Wrapper --> */}

//     </div>
//     {/* <!-- End of Page Wrapper --> */}

//     {/* <!-- Scroll to Top Button--> */}
//     <a className="scroll-to-top rounded" href="#page-top">
//         <i className="fas fa-angle-up"></i>
//     </a>

//     {/* <!-- Logout Modal--> */}
//     {/* <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
//         aria-hidden="true">
//         <div className="modal-dialog" role="document">
//             <div className="modal-content">
//                 <div className="modal-header">
//                     <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
//                     <button className="close" type="button" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">×</span>
//                     </button>
//                 </div>
//                 <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
//                 <div className="modal-footer">
//                     <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
//                     <a className="btn btn-primary" href="login.html">Logout</a>
//                 </div>
//             </div>
//         </div>
//     </div> */}



// </body>



// </div>
//   )
// }


