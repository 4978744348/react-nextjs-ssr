import Layout from '../components/Layout';
import Link from 'next/link';


const PostLink = ({title}) => (
    <li>
        <Link href={`/post?tittle=${title}`}>
            <a>{title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout title="My blog">
        <ul>
            <PostLink title="react"/>
            <PostLink title="angular"/>
            <PostLink title="vue"/>
        </ul>
    </Layout>
)