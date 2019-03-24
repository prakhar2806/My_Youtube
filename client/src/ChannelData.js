import React, { Component } from 'react';



class ListItem extends Component {
    constructor(props) {
        super(props);
        this.rowSelected = this.rowSelected.bind(this);

        this.state = {
            channelId: null,
        };
    }

    rowSelected(event) {
        this.setState({ channelId: event.target.id });
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.channelId}</td>
                {/* <td><button className="btn btn-outline-primary waves-effect" id={this.props.channelId} type="submit" onClick={this.rowSelected}>GetVideo</button></td> */}
            </tr>
        );
    }
}

function ChannelList(props) {
    const channels = props.value;
    const listChannelItems = channels.map((channel) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={channel.toString()}
            name={channel.name} channelId={channel.channelId} />
    );
    return (
        <>{listChannelItems}</>
    );
}

class ChannelData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
            value: false
        };

        let Obj = false;

        this.handleClick = this.handleClick.bind(this);
    }

    updateValue() {
        console.log("inside updateValue");
        this.Obj = true;
        this.setState({ value: true })

    }

    handleClick() {
        let searchValue = document.getElementById("searchInput").value;
        this.setState({ data: null });

        this.callBackendAPI(searchValue)
            .then(res => {
                this.setState({ data: res.data.items });
                console.log(this.state.data);
            })
            .catch(err => console.log(err));
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
        const response = await fetch('/videos/getAllChannels');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    render() {

        const headerStyle = {
            padding: '5px 8px',
            background: '#188be2',
            color: '#f1f1f1',
            height: '50px'
        }

        const headerContent = {
            padding: '0',
            margin: '0'
        }

        let isSearchResultAvailable = this.state.data != null ? true : false;
        let list = new ListItem();
        console.log("list", list.state.channelId);

        if (isSearchResultAvailable) {
            return (
                <div className="App">
                        <div class="header" id="myHeader" style={headerStyle}>
                            <h2 style={headerContent}>Channels List</h2>
                        </div>
                        <table className="table">
                            <thead >
                                <tr>
                                    <th class="text-center">Channel Name</th>
                                    <th class="text-center">ChannelId</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ChannelList value={this.state.data}></ChannelList>
                            </tbody>
                        </table>
                    </div>
            );
        } else {
            return (
                <p>No Channel Found</p>
            );
        }
    }
}

export default ChannelData;