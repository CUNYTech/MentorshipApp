import React from 'react';




const WorkInformation = () => {

    return(

        <div>
            <h3>Work Information</h3>
            <form >
                <p>
                    <label >Occupation: </label>
                    <input type="text" placeholder="Programmer" />
                </p>
                <p>
                    <label>Employer name: </label>
                    <input type="text" placeholder="Snap Inc." />
                </p>
                <p>
                    <label>Title: </label>
                    <input placeholder="Senior Programmer" />
                </p>
                <p>
                    <label>Length of employment: </label>
                    <input placeholder="15 years" />
                </p>
                <p>
                    <label>Name of supervisor: </label>
                    <input placeholder="Jane Doe" />
                </p>
                <p>
                    <label>Title: </label>
                    <input placeholder="VP of product" />
                </p>

                <p>
                    <input type="submit" value="Next" />
                </p>


            </form>
        </div>

    );
};

export default WorkInformation;