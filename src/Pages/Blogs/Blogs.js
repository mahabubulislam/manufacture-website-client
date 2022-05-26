import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <section className='p-10 w-4/5 mx-auto'>
            <div className='p-3 bg-base-200'>
                <h4 className='text-xl'>How will you improve the performance of a React Application?</h4>
                <p>Ans: To improve the performance of React Application, We need to follow some steps.</p>
                <ul className='list-disc p-3'>
                    <li>Use the Production Build</li>
                    <li>Single-File Builds</li>
                    <li>Brunch</li>
                    <li>BrowseriFy</li>
                    <li>Rollup</li>
                    <li>Webpack etc.</li>
                </ul>
                <p>For more info visit <Link className='text-blue-600' to='https://reactjs.org/docs/optimizing-performance.html'>Click here</Link></p>
            </div>
            <div className='p-3 bg-base-200'>
                <h4 className='text-xl'>What are the different ways to manage a state in a React application?</h4>
                Ans: <ul>
                    <li>Local state</li>
                    <li>Global State</li>
                    <li>Server State</li>
                    <li>URL State</li>
                </ul>
                <p><span className='font-bold'>Local State:</span>Local state is data we manage in one or another component. useState hook is a localState</p>
                <p><span className='font-bold'>Global State:</span>Global state is use for when we need to get data anywhere in our app</p>
                <p><span className='font-bold'>Data State:</span>Data that comes from an external server that must be integrated with our UI state.</p>
                <p><span className='font-bold'>URL State:</span>Data that exists on our URLs, including the pathname and query parameters.</p>
            </div>
            <div className='p-3 bg-base-200'>
                <h4 className='text-xl'>How does prototypical inheritance work?</h4>
                <p>Ans: When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”.</p>
            </div>
            <div className='p-3 bg-base-200'>
                <h4 className='text-xl'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h4>
                <p>Ans: I do not set state directly because useState hooks return two values, one is the initial value to store state and another is a function to set the value. UseState hooks needs a initial value for the state. We use useState when we need to change a state from our apps. The change value is set by useState function.</p>
            </div>
            <div className='p-3 bg-base-200'>
                <h4 className='text-xl'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h4>
                <p>Ans: I use <small className='text-bold'>find</small> method to find the products. Example: products.find(product= &gt; product.name === 'searchValue'). Search value can be a value of input field.</p>
            </div>
            <div className='p-3 bg-base-200'>
                <h4 className='text-xl'>What is a unit test? Why should write unit tests?</h4>
                <p>Ans: Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure</p>
            </div>
        </section>
    );
};

export default Blogs;