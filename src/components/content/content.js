import React, { Component } from 'react';
import img from "../images/employees/dr-wagstaff.jpg";


export default function() {
    return (
        <div className="main-info">
            <div className="left-column">
                <div className="heading-area">
                        <div className="welcome">
                            <h1>WELCOME TO ZIMBI DENTAL</h1>
                        </div>
                        <div className="eden">
                            <h1>Dr. Chad Wagstaff serving Eden, Ut, and surrounding areas</h1>
                        </div>
                    </div>
                    <div className="paragraph">
                        <div className="post-content">
                            <p>When you visit Zimbi Dental, you can count on us to provide you with the highest quality of dental care in a friendly, comfortable and modern environment. We offer a full range of services and welcome patients of all ages to our office. Our dentist is also bilingual in English and Spanish. We invite you to call or visit us today to make your appointment with Dr. Chad Wagstaff and learn more about comprehensive dentistry in Eden, Utah, and surrounding areas!</p>
                        </div>
                    </div>
            </div>
            <div class="right-column">
                    <div class="dr-wagstaff">
                        <img src={img}  alt="papa smurf" />
                    </div>
            </div>
        </div>
    )
} 
