import Link from 'next/link';
import Layout from '../components/MyLayout'

const PostLink = props => (
	<li>
		<Link href={`/post?title=${props.title}`}>
			<a>{props.title}</a>
		</Link>
	</li>
);

export default function Index() {
	return (
		<div>
			<Layout>
				<p>Hello Next.js</p>
			</Layout>
		</div>
	);
}
