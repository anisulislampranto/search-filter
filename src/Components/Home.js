import React, { useState } from 'react';
import fakeData from '../MOCK_DATA.json';


const Home = () => {
    const [searchTerm, setSearchTerm] = useState('')

    console.log(searchTerm);

    return (
        <div>
            <input type="search" name="" placeholder='Search' onChange={(e)=>{setSearchTerm(e.target.value)}}/>

            {
                fakeData.filter((data)=>{
                    if (data === "") {
                        return data;
                    } else if (data.first_name.toLocaleLowerCase().includes(data.first_name.toLocaleLowerCase())) {
                        return data;
                    } else return data;
                }).map(data => <p>{data.first_name}</p>)
            }
        </div>
    );
};

export default Home;