
import {Component} from "react";
import UserClass from "./UserClass"

class Contact extends Component{
  constructor(props: any){
    super(props);
   // console.log("contact constructor called");
  }
  componentDidMount(): void {
   // console.log("contact componentDidMount called");
  }
  render(){
    // console.log("contact render called");
  return (
    <div>
      <UserClass name="jyoti Agarwal" />
      {/* <UserClass name="leena Agarwal" /> */}
    </div>
  )
}
}

export default Contact;
