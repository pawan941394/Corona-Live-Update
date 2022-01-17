import React, { useEffect, useState } from 'react'

const Statewise = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
        const actualData = await res.json();
        setData(actualData.data.regional);
    }
    useEffect(() => {
        getCovidData();
    })
    return (
        <>
            <div className="container-fluid bg-dark" >
                <div className="main-heading text-white">
                    <h1 className="mb-5 mt-5">
                        <b className="font-weight-bold ">Inida </b> covid 19 Dashbord
                    </h1>
                </div>
                <div className="table-responsive m2 bg-dark">
                    <table className="table bg-dark table-hover">
                        <thead className="thead-dark" >
                            <tr className="text-white">

                                <th>Loc</th>
                                <th>confirmedCasesIndian</th>
                                <th>confirmedCasesForeign</th>
                                <th>discharged</th>
                                <th>deaths</th>
                                <th>totalConfirmed</th>
                            </tr>
                        </thead>
                        <tbody className="text-white">
                            {
                                data.map((currElem, ind) => {
                                    return (
                                        <tr key={ind} >
                                            <th>{currElem.loc}</th>
                                            <th>{currElem.confirmedCasesIndian}</th>
                                            <th>{currElem.confirmedCasesForeign}</th>
                                            <th>{currElem.discharged}</th>
                                            <th>{currElem.deaths}</th>
                                            <th>{currElem.totalConfirmed}</th>



                                        </tr>
                                    )
                                })

                            }


                        </tbody>
                    </table>
                </div>

            </div>







        </>
    )
}
export default Statewise;