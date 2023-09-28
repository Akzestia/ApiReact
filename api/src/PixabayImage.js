import React from "react";
import {useNavigate} from 'react-router-dom';

class PixImage extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      imgurl: "",
    };
  }

  componentWillReceiveProps(nextProps){
  
    this.setState({imgurl: nextProps.url})
  }


  render() {
    if(this.state.imgurl != null){
      return (
      
        <div>
          <img
            src={this.state.imgurl}
            style={{
              margin: 1 + "rem",
              alignSelf: "center"
            }}
            onClick={() => {
              this.props.navigate(this.state.imgurl)
            }}
          ></img>
        </div>
      );
    }
    
  }
  
}



export function ImageWithNavigate(props){
    const navigate = useNavigate();
    
    

    return (<PixImage navigate={navigate} url={props.url}></PixImage>)
}

export default PixImage;
