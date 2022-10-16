import React from 'react';
import './Blog.css';
import image1 from '../../images/p&s.png';

const Blog = () => {
    return (
        <div>
            <div className='blog'>
                <p className='blog-question'> <strong>Question:</strong> How does react works?</p>
                <p><strong className='blog-answer'>Ans:</strong> React is a declarative, efficient, and flexible JavaScript library for building user interfaces.ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook. <br /> <br />

                    React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. <br /> <br />

                    While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM. <br /> <br />
                    Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it's worth keeping a DOM tree in it to speed up its manipulation. <br /> <br />
                    Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.
                </p>
            </div>
            <div className='blog'>
                <p className='blog-question'> <strong>Question:</strong> Difference between props and state?</p>
                <p><strong className='blog-answer'>Ans: props:</strong> Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component. <br />
                    <strong className='blog-answer'>state:</strong> The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly. <br /><br />
                    <img className='blog-image1' src={image1} alt="" />
                </p>
            </div>
            <div className='blog'>
                <p className='blog-question'> <strong>Question:</strong> What does useEffect hook do without loading data With the help of API ?</p>
                <p><strong className='blog-answer'>Ans: useEffect:</strong> The useEffect Hook allows you to perform side effects in your components. <br /><br />
                    Without loading data With the help of API directly useEffect do: Updating the DOM and set the timers. <br /><br />
                    useEffect accepts two arguments. The second argument is optional.
                </p>
            </div>
        </div>
    );
};

export default Blog;