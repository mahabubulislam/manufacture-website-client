import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className='p-10'>
            <div>
                <h1 className='text-4xl'>Mahabubul Islam</h1>
                <p>Email: mahabub2k1@gmail.com</p>
            </div>
            <div className='p-5 mt-10'>
                <h3 className='text-2xl'>Educational Qualification</h3>
                <div class="overflow-x-auto mt-10">
                    <table class="sm:table-auto md:table-fixed">

                        <thead className='bg-primary'>
                            <tr>
                                <th>Exam Name</th>
                                <th>Board</th>
                                <th>Institute Name</th>
                                <th>Group</th>
                                <th>Year</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody className='bg-base-200'>

                            <tr>
                                <th>SSC</th>
                                <td>Dhaka</td>
                                <td>Kalihati R. S. Pilot Government High School, Kalihati</td>
                                <td>Science</td>
                                <td>2017</td>
                                <td>GPA 4.82 out of 5</td>
                            </tr>

                            <tr>
                                <th>Diploma In Engineering</th>
                                <td>Banglades Technical Education Board</td>
                                <td>Tangail Polytechnic Institute, Tangail</td>
                                <td>Computer Science and Technology</td>
                                <td>2021(Due to Covid 19, final exam held in 2022)</td>
                                <td>Not publish yet</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h4 className='text-xl font-bold'>Technology: Html, CSS, Bootstrap, Tailwind CSS, JavaScript, JavaScript DOM, ES6, React, React Router, React Bootstrap, Daisy UI, Firebase.</h4>
                <p>Currently Learning:  Node JS and Express Js</p>
            </div>
            <div>
                <h2 className='text-3xl'>PROJECTS</h2>
                <Link className='block text-blue-600' to='https://trust-reviews.netlify.app/'>Trust Reviews</Link>
                <Link className='block text-blue-600' to='https://lucky-winner.netlify.app/'>Lucky Winner</Link>
                <Link className='block text-blue-600' to='https://pregnancy-care-77a79.web.app/'>Pregnancy Care</Link>
            </div>
        </div>
    );
};

export default Portfolio;