import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import APIRequest from './request'
import {Navigation} from './navigation'



const Body = (img_url, name, creator, created_date, description, symbol) => {
    return (
        <>
            <div style={{backgroundColor: "whitesmoke"}}>
                <div class="offset-md-4 offset-sm-3 col-4 my-5 p-5">
                    <img src={img_url} alt={name}/>
                </div>
            </div>
            <div class="offset-3 col-6 my-3">
                <div class="row py-3">
                    <h1 style={{fontWeight: 700, fontStyle: "normal"}}>{name} by {creator}</h1>
                </div>
                <div class="row py-5">
                    <p class="lead">{name}, {created_date}</p>
                </div>
                <div class="row py-2 small">
                    <p class="fw-bold">Created date: {created_date}</p>
                    <p><em>Description: {description}</em></p>
                </div>
                <div class="row py-4">
                    <hr/>
                </div>
                <div class="row py-3">
                    <div class="col-2">
                        <img src={img_url} alt="profile image" class="rounded-circle" style={{width:"80px", height:"80px"}}></img>
                    </div>
                    <div class="offset-sm-1 offset-md-0 col-4 py-2">
                        <p>{name}</p>
                        <small><em>{symbol}</em></small>
                    </div>
                </div>
            </div>              

        </>
    )
}


const Auth = (id, contract, klaytnscope, opensea, price) => {
    return (
        <div class="row py-5">  
            <div class="card offset-md-3 offset-xs-1 col-md-6" style={{borderRadius: "20px"}}>
                <div class="card-body py-5 px-5">
                    <h4>Authentication</h4>
                    <div class="row py-3">
                        <div class="row py-4">
                            <div class="col-2 fw-bold">
                                #ID
                            </div>
                            <div class="col-8">
                                {id}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2 fw-bold">
                                Contract
                            </div>
                            <div class="col-8">
                                {contract}
                            </div>
                        </div>
                        <div class="row py-4">

                        </div>
                        <div class="row fw-bold py-4">
                            <div class="col-6">
                                <div class="row">
                                    <div class="col-4">
                                        <a href={klaytnscope} target="blank" style={{textDecoration: "none", color: "inherit"}}>
                                            <img src="https://scope.klaytn.com/icons/favicon@310.png" alt="klaytnscope" class="rounded-circle" style={{width:"40px", height:"40px"}}></img>
                                        </a>
                                    </div>
                                    <div class="col-8 px-0">
                                        <a href={klaytnscope} target="blank" style={{textDecoration: "none", color: "inherit"}}>
                                            View on klaytnscope
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-6">
                                <div class="row">
                                    <div class="col-4">
                                        <a href={opensea} target="blank" style={{textDecoration: "none", color: "inherit"}}>
                                            <img src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.png" alt="klaytnscope" class="rounded-circle" style={{width:"40px", height:"40px"}}></img>
                                        </a>
                                    </div>
                                    <div class="col-8 px-0">
                                        <a href={opensea} target="blank" style={{textDecoration: "none", color: "inherit"}}>
                                            View on Opensea
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr/>
                        
                        <div class="row py-4 px-4">
                            Price: {price} USD
                        </div>
                        <div class="row py-2">
                            <div class="col-6">
                                <button class="btn btn-success w-100">Buy now</button>
                            </div>
                            <div class="col-6">
                                <button class="btn btn-success w-100" style={{opacity:0.5}}>Wish List</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}



function MainPage() {
    const data = APIRequest()
    return (
        <>
            <Navigation />
            <div> {(data.length !== 0)
                ?
                <div>
                    <div>{data.length}</div>
                    {Body(data["image_url"], data["name"], String(data["creator"]["address"]).substring(2, 8), data["collection"]["created_date"], data["collection"]["description"], data["asset_contract"]["symbol"])}
                    {Auth(data["id"], data["asset_contract"]["address"], data["external_link"], data["permalink"], data["last_sale"]["payment_token"]["usd_price"])}   
                </div>
                : 
                <div class="py-5" style={{position: "fixed", top: "40%", left: "40%"}}>
                    <h2>Loading...</h2>
                </div>
            }
            </div>
        </>
    )
}


export default MainPage