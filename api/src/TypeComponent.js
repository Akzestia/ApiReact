

import React from "react";
import axios from "axios";


class Category extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            title: this.props.title,
        }
    }

    render(){
        return(
            <div onClick={() =>{
                
                let searchstr = this.state.title;
                this.baseUrl =
                  "https://pixabay.com/api/?key=39584736-d653604d95086e2f2277cbc33&q=" +
                  searchstr + "&image_type=photo&per_page=100";
            
                axios.get(this.baseUrl).then((res) => {
                    this.props.update(res.data.hits)
                });
            }}><p style={{paddingLeft: "1rem", paddingRight: "1rem"}}><i class={this.props.icon}></i>   {this.state.title}</p></div>
        )
    }
}

export default Category