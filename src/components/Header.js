import React, { Component } from 'react';

class Header extends Component {
  render() {
    var product = {
        id:1,
        name: 'iphone 7',
        price: '15.000.000',
        status:false
    };
    var users = [
        {
            id:1,
            name:'Nguyen van A',
            age:18
        },
        {
            id:2,
            name:'Nguyen van B',
            age:19
        },
        {
            id:3,
            name:'Nguyen van C',
            age:20
        }
    ];
    var elements = users.map((user, index) => {
        return  <div key={index}>
                    <h2>TÊn: {user.name}</h2>
                    <p>TUổi: {user.age}</p>
                </div>
    });
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <a className="navbar-brand" href="#">Title</a>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Link</a>
                    </li>
                </ul>
            </nav>
            <div className="ml-30">
                <h3>
                    ID: {product.id}<br/>
                    Name: {product.name}<br/>
                    Price: {product.price}<br/>
                    Status: {product.status ? 'Active': 'Pending'}
                </h3>
            </div>
            <hr/>
            {elements}
        </div>
    );
  }
}

export default Header;
