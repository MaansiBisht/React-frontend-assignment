import React, {useState, useEffect} from 'react';
import "../styles.css";
import BarChart from "./BarChart";
import { Link } from 'react-router-dom';

const datas = [
    [10, 30, 40, 20],
    [10, 40, 30, 20, 50, 10],
    [60, 30, 40, 20, 30]
]
var i = 0;


 const Bar = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        changeData();
    }, []);

    const changeData = () => {
        setData(datas[i++]);
        if(i === datas.length) i = 0;
    }

    const goBack = () => (
        <div className="mt-5">
          <Link className="btn btn-sm btn-info mb-3" to="/">
             Home
          </Link>
        </div>
      );
    

    return (
        <div className="Bar text-center">
            <h2>Bar Chart</h2>
            <button  className='center btn btn-sm btn-info' onClick={changeData}>Change Data</button>
            <BarChart width={1500} height={400} data={data} />
            {goBack()}
        </div>

    );
  
}

export default Bar;