import React from "react"

export default function Details() {
    return (
        <div className="details">
            <div className="profile-foto">
                <img src="../images/profile-image.jpg" />
            </div>
            <h3 className="details--name">David Masip</h3>
            <h5>Frontend Developer</h5>
            <div className="contact_btns">
                <a href = "mailto: davidmasip16@gmail.com" className="contact_btns--email">
                    <img src="../images/mail-icon.png" className="nav--icon" />
                    <span>Email</span>
                </a>
                <a href="#" className="contact_btns--portfolio">
                    <img src="../images/portfolio-icon.png" className="nav--icon" />
                    <span>Portfolio</span>
                </a>
            </div>
        </div>
    )
}