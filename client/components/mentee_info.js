import React from 'react';

const MenteeInformation = () => {
    return(
        <div>
            <h3>Personal Information</h3>
            <form>
                <p>
                    <label>Email: </label>
                    <input required="required" type="text"/>
                </p>
                <p>
                    <label>Password: </label>
                    <input required="required" type="text"/>
                </p>
                <p>
                    <label>Confirm Password: </label>
                    <input required="required" type="text"/>
                </p>
                <p>
                    <label>First Name: </label>
                    <input required="required" type="text"/>
                </p>
                <p>
                    <label>Last Name: </label>
                    <input required="required" type="text"/>
                </p>
                <p>
                    <label>Street Address: </label>
                    <input type="text"/>
                </p>
                <p>
                    <label>City: </label>
                    <input type="text" />
                </p>
                <p>
                    <label>State: </label>
                    <input required="required" type="text" />
                    <label>Zip Code: </label>
                    <input required="required" type="text" />
                </p>
                <p>
                    <label>Phone: </label>
                    <input text="text" />
                </p>
                <p>
                    <label>Occupation: </label>
                    <input required="required" type="text" />
                </p>
                <p>
                    <label>To which mentoring program are you applying? </label>
                    <select>
                        <option value="engineering">Engineering</option>
                        <option value="arts-design">Arts and Design</option>
                        <option value="business-and-financial">Business and Financial</option>
                        <option value="Social Services">Social Services</option>
                        <option value="computer-science">Computer Science</option>
                        <option value="mathematical">Mathematical</option>
                        <option value="construction">Construction</option>
                        <option value="education">Education</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="legal-occupation">Legal Occupation</option>
                        <option value="management">Management</option>
                        <option value="office-and-administrative">Office and Administrative</option>
                        <option value="production">Production</option>
                        <option value="sales">Sales</option>
                        <option value="other">Other</option>
                    </select>
                </p>
                <p>
                    <label>If other, please be specific: </label>
                    <input type="text"/>
                </p>
            </form>
            <button>Clear</button>
            <button>Submit</button>
        </div>
    );
};

export default MenteeInformation;