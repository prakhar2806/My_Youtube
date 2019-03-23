import React, { Component } from 'react';
// import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

function NoVideos(props) {
    return <p>{props.value}</p>
}

function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return (
        <tr>
            <td>{props.title}</td>
            <td><a href={props.url}>{props.url}</a></td>
            <td>{props.channelId}</td>
        </tr>
    )
}

function NumberList(props) {
    const numbers = props.value;
    const listItems = numbers.map((number) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={number.toString()}
            url={number.url} title={number.title} channelId={number.channelId} />
    );
    return (
        <>{listItems}</>
    );
}

class VideoData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };

    }

    componentDidMount() {
        this.callBackendAPI()
            .then(res => {
                this.setState({ data: res });
                console.log(this.state.data);
            })
            .catch(err => console.log(err));
    }

    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/videos/getAllVideos');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };


    render() {
        let isVideoAvailable = this.state.data != null ? true : false;
        
        if (isVideoAvailable) {
            return (

                // <button type="submit">asdasdas</button>
                // <a href={this.state.data}>click to navigate</a>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>URL</th>
                            <th>ChannelId</th>
                        </tr>
                    </thead>
                    <tbody>
                        <NumberList value={this.state.data}></NumberList>
                    </tbody>
                </table>


            )
        }
        else {
            return (
                <NoVideos value="no videos found"></NoVideos>
            );
        }
    }

}
export default VideoData;