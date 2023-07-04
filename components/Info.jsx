import React from "react"
import photo from "/selfie.jpeg"

export default function Info(){
    return (
        <div className="photo-text-container">
            <img className="photo" src={photo} alt="photo of zeno" />
            <h1>Zeno Degenkamp</h1>
            <h4>Developer and entrepreneur</h4>
            <div className="btn-section">
                <button><i class="fa-solid fa-envelope"></i>Email</button>
                <button className="linkedinBtn"><i class="fa-solid fa-message"></i>LinkedIn</button>
            </div>
        </div>
    )
}
