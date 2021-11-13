import React , {useState,useEffect } from 'react';
import "./overView.scss"
import InfiniteScroll from "react-infinite-scroll-component";
import {List, Avatar, Skeleton, Divider, Radio } from 'antd';


const Overview = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
            .then(res => res.json())
            .then(body => {
                setData([...data, ...body.results]);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        loadMoreData();
    }, []);


    return (
        <div className="over_container">
             <div className="row">
                <div className="col">
                    <h5>unresolved</h5>
                    <h1>60</h1>
                </div>
                <div className="col">
                    <h5>unresolved</h5>
                    <h1>60</h1>
                </div>
                <div className="col">
                    <h5>unresolved</h5>
                    <h1>60</h1>
                </div>
                <div className="col">
                    <h5>unresolved</h5>
                    <h1>60</h1>
                </div>
            </div>
            <div className='list'>
                    <div
                        id="scrollableDiv"
                        style={{
                            height: 300,
                            overflow: 'auto',
                            padding: '0 16px',
                            border: '2px solid rgba(140, 140, 140, 0.35)',
                        }}
                    >
                        <InfiniteScroll
                            dataLength={data.length}
                            next={loadMoreData}
                            hasMore={data.length < 5}
                            loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                            scrollableTarget="scrollableDiv"
                        >
                            <List
                            dataSource='2'
                            renderItem={() =>(
                                <List.Item>
                                    <List.Item.Meta
                                title={<h2>Unrelosel</h2>}
                                description={'group:Support'}
                                />
                                <div> View descrtion </div>
                                </List.Item>

                            )}
                            >
                            
                            </List>
                            <List
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item key={item.id}>
                                        <List.Item.Meta
                                            title={<h1>{item.name.last}</h1>}
                                        />
                                        <div>{item.name.first}</div>
                                    </List.Item>
                                )}
                            />
                        </InfiniteScroll>
                    </div>
                    <div
                        id="scrollableDiv"
                        style={{
                            height: 300,
                            overflow: 'auto',
                            padding: '0 16px',
                            border: '2px solid rgba(140, 140, 140, 0.35)',
                        }}
                    >

                        <InfiniteScroll
                            dataLength={3}
                            next={loadMoreData}
                            hasMore={data.length < 5}
                            loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                            scrollableTarget="scrollableDiv"
                            >
                            <List 
                            dataSource='2'
                            renderItem={() =>(
                                <List.Item>
                                    <List.Item.Meta
                                title={<h1>Tasks</h1>}
                                description={Date().toString()}
                                />
                                <div> View all </div>
                                </List.Item>

                            )}
                            >
                                <h3>Create</h3>
                            </List>
                            <List
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item key={item.id}>
                                        <Radio></Radio>
                                        <List.Item.Meta
                                            title={<a href="https://ant.design">{item.name.last}</a>}
                                            description={item.email}
                                            
                                        />
                                        <div>{item.nat}</div>
                                    </List.Item>
                                )}
                            />
                        </InfiniteScroll>
                    </div>
            </div>
        </div>
    );
};

export default Overview;