const blogLayout = ({ children }) => {
    return children;
}

export default blogLayout;

export async function generateMetadata({ params }) {
    return {
        title: params.post.split('-').join(' ')
    }
}