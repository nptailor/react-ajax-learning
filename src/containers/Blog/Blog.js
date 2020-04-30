import React, { Component } from 'react';
import './Blog.css';
import Posts from '../Posts/Posts';
import {Route,NavLink} from 'react-router-dom';
import NewPost from '../NewPost/NewPost';

// import FullPost from '../../components/FullPost/FullPost';
// import Post from '../../components/Post/Post';
// import axios from 'axios';


class Blog extends Component {

    render() {
        return (
            <div>
                <header  className="Blog">
                    <nav>
                        <ul>
                            <li><NavLink 
                            to="/" 
                            exact
                            activeClassName="active"
                            activeStyle={{
                                color: 'orange',
                                textDecoration: 'underline'
                            }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: 'new-posts',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
               {/*  <Route path='/' exact render={()=><h1>Home</h1>}/>
                <Route path='/' render={()=><h1>Home 2</h1>}/> */}
                <Route path='/' exact component={Posts}/>
                <Route path='/new-posts' component={NewPost}/>


                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}


            </div>
        );
    }
}

export default Blog;