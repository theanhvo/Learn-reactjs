class Dom extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            num: 0
        }
    }
    add(){
        this.setState({num: this.state.num + 1});
    }
    render() {
        return (
            <div>
                <button onClick={this.add.bind(this)}>Hello {this.state.num}</button>
            </div>
        );
    }
}

class Ablum extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hinh: 1
        }
    }
    next(){
        this.setState(
            {hinh: this.state.hinh + 1}
        );
    }
    prev(){
        this.setState({hinh: this.state.hinh - 1})
    }
    render(){
        return (
            <div>
                <img src={'images/' + this.state.hinh + '.png'} />
                <hr />
                <button onClick={this.next.bind(this)}>Tiep theo</button>
                <button onClick={this.prev.bind(this)}> Quay lai</button>
            </div>
        );
    }
}

class Image extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hinh: 1
        }
    }
    changeImage(){
        this.setState({
            hinh: (this.state.hinh % 3) + 1
        })
    }
    componentDidMount(){
        setInterval(this.changeImage.bind(this), 1000)
    }
    render() {
        return (
            <img src={"images/" +  this.state.hinh + ".png"} />
        );
    }

    
}

class Note extends React.Component {
    render(){
        return (
            <div>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mang: ['Hello', 'My name', 'The anh']
        }
    }
    add(){
        this.state.mang.push('node js', 'react js')
        this.setState(this.state)
    }
    render(){
        return (
            <div>
            <button onClick={this.add.bind(this)}> Thêm </button>
                {
                    this.state.mang.map(function(value, index){
                        return <Note key={index}>{value}</Note>
                    })
                }
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Dom />
        {/* <Ablum /> */}
        {/* <Image /> */}
        <List />
    </div>
, document.getElementById("root"));