import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';


export const Navigation = () => {
    return (
        <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark" style={{height: "80px", opacity: 0.9}}>
            <div class="offset-1 container-fluid">
                <a class="navbar-brand  fw-bold" style={{color: "white"}} href="#">COJAM NFT</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarcollapse" aria-controls="navbarcollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse offset-md-3" id="navbarcollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item p-3">
                            <a class="nav-link active" aria-current="page" href="#" style={{color: "white", fontSize: "15px", fontWeight: "bold"}}>Market</a>
                        </li>
                        <li class="nav-item p-3">
                            <a class="nav-link" href="#" style={{color: "white", fontSize: "15px", fontWeight: "bold"}}>Artist</a>
                        </li>
                        <li class="nav-item p-3">
                            <a class="nav-link" href="#" style={{color: "white", fontSize: "15px", fontWeight: "bold"}}>News</a>
                        </li>
                        <li class="nav-item p-3">
                            <a class="nav-link" href="#" style={{color: "white", fontSize: "15px", fontWeight: "bold"}}>About</a>
                        </li>
                        <li class="nav-item p-3">
                            <a class="nav-link" href="#" style={{color: "white", fontSize: "15px", fontWeight: "bold"}}>VR Gallery</a>
                        </li>
                    </ul>
                    
                    <div class="d-none d-lg-block">
                        <span type="button" data-toggle="collapse" data-target="#searchCollapse" aria-expanded="false" aria-controls="searchCollapse">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </span>
                    </div>

                    <div class="collapse d-none d-lg-block px-3" id="searchCollapse">
                        <input class="px-2" type="text" placeholder="Search..." style={{width:"100px", border:"none", outline:"none", backgroundColor: "transparent", color: "white"}}></input>
                    </div>
                    
                    <div class="d-none d-lg-block" style={{marginRight: "100px"}}>
                        <button type="button" class="btn btn-success" style={{borderRadius: "15px"}}>Connect</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
