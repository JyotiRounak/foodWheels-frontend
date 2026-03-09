import React from "react";
interface UserclassProps {
    name: string
}
interface Count {
    count: number
}
interface UserInfo{
    login: string,
    location: string,
    avatar_url: string
}
class UserClass extends React.Component<UserclassProps, Count & { userInfo: UserInfo }>{
    constructor(props: UserclassProps){
        super(props);
        this.state = {
            count: 0,
            userInfo: {
                login: "dummy name",
                location: "default",
                avatar_url: "default"

            }
        }
        console.log(props);
        console.log("constructor called child");
    }
    async componentDidMount(): Promise<void> {
    const response = await fetch("https://api.github.com/users/JyotiRounak");
    const data = await response.json();
    console.log(data);
    this.setState({
        userInfo: data
    })
    console.log(this.props.name +"child componentDidMount called");
    }

    componentDidUpdate(): void {
        console.log("componentDidUpdate called child");
    }
    componentWillUnmount(): void {
        console.log("componentWillUnmount called child");
    }
    render(){
        console.log("render method called child");
        return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={this.state.userInfo.avatar_url} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{this.state.userInfo.login}</div>
    <p className="text-gray-700 text-base" onClick={()=> this.setState({ count: this.state.count+1})}>
     {this.state.count}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
        )
    }
}

export default UserClass;

// mounting phase
// constructor is called (dummy)
// render is called (dummy)
// componentDidMount is called (api call)
// this.setState (this finally finisjes the mounting cycle)) - state variable is updated
 // update cycle starts
// render is called (actual data)
// html is loaded with actual data
// componendDidUpdate is called (after the update cycle is finished)