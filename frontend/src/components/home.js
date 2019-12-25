import React from 'react'
import MainLayout from './main-layout'
import './css/home.css'

// const Home = React.createClass({
//     render: function() {
//         return (
//             <div className="home-page">
//                 <h1>Home</h1>
//             </div>
//         );
//     }
// });

class Home extends React.Component {
    render() {
        return (
            <div>
            <MainLayout>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
            </Breadcrumb> */}
            <div className="home-page">
                <h1>Home</h1>
            </div>
            </MainLayout>
            </div>
        )
    }
}
export default Home;