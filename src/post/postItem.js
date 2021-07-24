import { PostContext } from '../App.js'
const PostItem = () => {
    return (
        <PostContext.Consumer>
        {(post)=> {
            return (                        
                <div style = {{'marginTop':'20px'}} className="container">
                    <div className="avatar-flip">
                        <img src={post.avatar} height="150" width="150" alt="" />
                    </div>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <h3>{post.likes}</h3>
                    <h4><a href={post.link} target="_blank" rel="noopener noreferrer">Post Social Link</a></h4>
                </div>
            )
        }}
    </PostContext.Consumer>
    )
}
export default PostItem;