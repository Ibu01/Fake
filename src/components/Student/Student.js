import React from 'react';
import './Student.css'
import pic3 from '../../images/Shawon.JPG'
import pic4 from '../../images/Ibus2.JPG'

const Student = () => {
    return (
        <div>
            <h1>Future Student</h1>
            <hr />
            <div className="para-content">
                <p>We are looking for the student who is very interesting to gather knowledge.For those there features are follow</p>
            </div>
            <div className="features-container">
                <div>
                    <div>
                        <h3>Scholarships and Aids</h3>
                        <p>A good number of scholarships for the qualified students.</p>
                    </div>
                    <div>
                        <h3>Facilities</h3>
                        <p>Free Transport, Modern Living Course, Indoor and Outdoor Games, Sports, Wifi, Open  Study Arena, Technical Training Courses, English Learning Center.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Admission Requirement</h3>
                        <p>Key academic dates, deadlines and requirements</p>
                    </div>
                    <div>
                        <h3>Admission Test</h3>
                        <p>All applicants must qualify in the admission test to be eligible for admission</p>
                    </div>
                </div>
            </div>
            <hr />

            <div className="student-conatainer">
                <div>
                    <img className="img-style" src={pic3} alt="" />
                    <h2>Rifat Hasan</h2>
                    <p>This is school is very good for our study.It have a huge amount of falcilities which will be very facinated to you and the teacher of this scholl well qualified.We learn a lot from our school.There is a huge play ground around us</p>
                </div>
                <div>
                    <img className="img-style" src={pic4} alt="" />
                    <h2>Ibrahim hossain</h2>
                    <p>This is school is very good for our study.It have a huge amount of falcilities which will be very facinated to you and the teacher of this scholl well qualified.We learn a lot from our school.There is a huge play ground around us</p>
                </div>
            </div>
        </div>
    );
};

export default Student;