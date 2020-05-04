import React, { Component } from 'react';
import './Blog.css';
import Posts from '../Posts/Posts';
import { Route, NavLink, Switch,Redirect } from 'react-router-dom';
//import NewPost from '../NewPost/NewPost';
import asyncComponent from '../../hoc/ayncComponent'

// import Post from '../../components/Post/Post';
// import axios from 'axios';

const AsynNewPost= asyncComponent(()=>{
    return import('../NewPost/NewPost');
})
class Blog extends Component {
    state = {
        auth: false
    }

    render() {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts"
                                exact
                                activeClassName="active"
                                activeStyle={{
                                    color: 'orange',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
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
                <Switch>
                    {/* {this.state.auth?<Route path='/new-posts' component={NewPost} />:null}  if you want to only render of authenticated */}
                    <Route path='/new-posts' component={AsynNewPost}/>
                    <Route path='/posts' component={Posts} />
                    <Route render={()=><h1>Page Not Found</h1>}/>  {/*for 404 error*/}
                    <Redirect from='/' to='/posts'/>
                </Switch>

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