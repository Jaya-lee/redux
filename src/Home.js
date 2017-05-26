import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PostBody from './PostBody'
class Home extends React.Component{
    render(){
        return(
            <div className='all'>
                <h1 className='back-home'>HOME</h1>
                {

                    Object.keys(this.props.posts).map(item =>
                    <Link key={item} to={`/post/${item}`} className='link'>
                        <PostBody id={item}/>
                    </Link>
                )
                }
            </div>
        )
    }
}

const mapStateToProps =(state) =>({
    posts:state.posts
})
export default connect(mapStateToProps)(Home)
