class KhoaPham extends React.Component {
   render() {
      return (
        <div>
            <h1 className="mauvang"> The Anh developer</h1>
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

ReactDOM.render(
    <div>
        <KhoaPham />
        <KhoaPham />
        <KhoaPham />
        <KhoaPham />
        
    </div>
, document.getElementById("root"));