import Link from 'next/link';
import Layout from "../components/Layout";


const About = () =>{
    return(
        <Layout title="About">
            <Link href="/">
                <a>Go to home</a>            
            </Link>
            <p>JavaScript programmer</p>
            <img src = "/static/javascript-logo.png" alt="JavaScript" height="200px"/>
        </Layout>
    )
}
export default About;