import React, { Component } from 'react';
// import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

function NoVideos(props) {
    return <p>{props.value}</p>
}

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.rowSelected = this.rowSelected.bind(this);
    }

    rowSelected(event) {
        console.log("event.target.id", event.target.id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.title}</td>
                <td><a href={this.props.url}>{this.props.url}</a></td>
                <td>{this.props.channelId}</td>
                <td><button class="btn btn-outline-primary waves-effect" id={this.props.channelId} type="submit" onClick={this.rowSelected}>GetVideo</button></td>
            </tr>
        );
    }
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