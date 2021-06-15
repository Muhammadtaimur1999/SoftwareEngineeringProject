import React from "react";
import img from "../../assets/salad.png";
import Button from "../../components/Button";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Welcome(){

    const history =useHistory();
    let user = useSelector((state)=>state.user);

    return (

            <div className="text-sm-center text-md-center text-lg-left" style={{background:"#696060",minHeight:"60vh",paddingTop:"100px",paddingBottom:"50px"}}>
                <div className="row overflow-hidden align-items-center">
                    <div className='col-md-12 col-lg-5'>
                        <img src={img} alt="Salad Picture" style={{wdith:"85%"}}/>
                    </div>
                    <div className='col-md-12 col-lg-5'>
                       
                        
                        <h1 style={{color:'white'}}>Delicous Food is waiting for you</h1>
                        
                        
                        <div className='row'>
                            <div className='col-md-12 col-lg-6' style={{marginTop:"30px"}}>
                                <Button redButton label='Show Menu' onClick={()=>history.push("/customer")}/>
                            </div>
                            <div className='col-md-12 col-lg-6' style={{marginTop:"30px"}}>
                                {user === null ?  <Button whiteButton label='Login'/> : null}
                            </div>
                        </div>

                    </div>                    
                </div>
            </div>



    );
}