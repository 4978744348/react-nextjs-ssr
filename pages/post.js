import Layout from '../components/Layout';

const Post = ({url}) =>{ 
    console.log("!!!!!!!!!!!!!!", url.query.tittle) 
    return (
        <Layout title={url.query.tittle}>
            <p>some text, for example</p>
        </Layout>
    )} 

export default Post;
