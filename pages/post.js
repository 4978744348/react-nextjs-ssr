import Layout from '../components/Layout';
import {withRouter} from 'next/router';

const Post = ({router}) =>{ 
    return (
        <Layout title={router.query.tittle}>
            <p style={{width:"80vw"}}>
                some text, for example
            </p>
        </Layout>
    )} 

export default withRouter(Post);
