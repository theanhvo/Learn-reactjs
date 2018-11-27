import React, { Component } from 'react';

class State extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      desc:'',
      gender: 0,
      lang: 'en',
      status: false
    }
    this.onHandelChange = this.onHandelChange.bind(this)
  }
  onHandelChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked: target.value; 
    this.setState({
        [name]: value
    });
    
  }
  onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div className="container-fluid">
        <form onSubmit={this.onHandleSubmit}>
          <label>user name</label>
          <input proerti="test" type="text" name='username' onChange={this.onHandelChange} />
          <label>Password</label>
          <input type="password" name='password' onChange={this.onHandelChange} />
          <br />
          <label>Des</label>
          <textarea name='desc' onChange={this.onHandelChange}></textarea>
          <br />
          <label>Gender</label>
          <select name="gender" 
            onChange={this.onHandelChange}
            value={this.state.gender}>
            <option value={0} selected={this.state.gender ===0}>Nam</option>
            <option value={1} selected={this.state.gender ===1}>Nu</option>
          </select>
          <br />
          <label>
              Ngôn ngữ
          </label>
          <div className="radio">
            <label>Tiếng việt 
            <input type="radio" name="lang" value="vi" 
            checked={this.state.lang === 'vi'}
            onChange={this.onHandelChange}/>
            </label>
            <br/>
            <label>Tiếng anh<input type="radio" name="lang" value="en" 
              checked={this.state.lang === 'en'}
              onChange={this.onHandelChange}/></label>
            
          </div>
          <br />
          <div className="checkbox">
            <label>Trang thai
              <input type="checkbox" name="status" value={true} onChange={this.onHandelChange}/>
            </label>
          </div>
          <br />
          <button type="submit">lưu lại</button>
          <button type="reset">xoá trắng</button>
        </form>
      </div>
    );
  }
}

export default State;
