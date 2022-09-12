import React, { Component } from "react";

export class NewsItems extends Component {
 
  render() {
    let {title ,description ,imageUrl,newsUrl,author , date,source} = this.props
    return (
      <div className= "my-3">
        <div className="card" style={{width: "18rem" ,height:"100%"}}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {title} <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            10+</span></h5>
            <p className="card-text">
             {description}</p>
             <p className="card-text"><small className="text-muted">By{!author?"Unknown":author} on {new Date(date).toGMTString}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
