import Link from 'next/link';
import Layout from "../components/Layout";
import {Component} from "react";
import fetch from 'isomorphic-unfetch';


export default class About extends Component{

    // state = {
    //     user: null
    // }


    static async getInitialProps(){
        const res = await fetch('https://api.github.com/users/Kusa4es');
        const data = await res.json();
           
            return { user: data}

    }

    // static getInitialProps(){
    //     fetch('https://api.github.com/users/reedbarger')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log("!!!!!!!!!!!!",data);
    //         })
    //         return { user: "user"}

    // }

    // componentDidMount(){
    //     fetch('https://api.github.com/users/reedbarger')
    //     .then(res => res.json())
    //     .then(data => {
    //         this.setState({
    //             user: data
    //         });
    //     })
    // }


    render(){
        const {user} = this.props;
        return(
            <Layout title="About">
            {/* {JSON.stringify(this.state.user)} */}
            {/* {JSON.stringify(this.props.user)} */}
                <p>{user.name}</p>
                <img src = {user.avatar_url} alt="Reed" height="200px"/>
            </Layout>
        )
    }
}
