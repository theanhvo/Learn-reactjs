// global function
function getName(name){
    alert(name)
}

class TheAnh extends React.Component {
    // init state
    constructor(props) {
        super(props);
        this.state = {
           tongHocVien: this.props.tongHocVien
        }
    }

    layThongTin(){
        alert(this.props.children);
    }

    addStudent() {
        this.state.tongHocVien = parseInt(this.state.tongHocVien) + 1;
        this.setState(this.state)
    }
    
    render() {
        return (
            <div>
                <h1 className="mauvang"> {this.props.ten} - {this.props.giangvien}</h1>
                <div>So hoc vien: {this.state.tongHocVien}</div>
                <p>{this.props.children}</p>
                <button onClick={() => {getName(this.props.ten)}}>Thong tin</button>
                <button onClick={this.addStudent.bind(this)}>Thêm học viên</button>
                {/* component nested */}
                <KhoaHoc />
            </div>
        );
    }
}

class KhoaHoc extends React.Component {
    render(){
        return (
            <h3>Lap trinh React</h3>
        );
    }
}

class InputTag extends React.Component {
    show(){
        var text = this.refs.sl.value;
        alert(text);
    }
    render() {
        return (
            <div>
                <input type="text" ref="txt" />
                <select ref="sl">
                    <option value="a">AAA</option>
                    <option value="b">BBB</option>
                    <option value="c">CCC</option>
                </select>
                <button onClick={this.show.bind(this)}>Hien thi</button>
            </div>
        );
    }
}



ReactDOM.render(
    <div>
        <InputTag />
        <TheAnh ten="ReactJS"  giangvien="mr khoa" tongHocVien="10">Mon hoc python </TheAnh>
        <TheAnh ten="ReactJS"  giangvien="mr tu" tongHocVien="20">Mon hoc reactjs</TheAnh>
    </div>
, document.getElementById("root"));