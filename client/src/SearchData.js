import React, { Component } from 'react';


function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return (
        <tr>
            <td><img src={props.imageUrl} width="60" /></td>
            <td>{props.title}</td>
            <td><a href={props.url}>{props.url}</a></td>
            <td>{props.channelId}</td>
        </tr>
    )
}

function NumberList1(props) {
    const numbers = props.value;
    const listItems = numbers.map((number) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={number.toString()}
            url={"https://www.youtube.com/watch?v=" + number.id.videoId} title={number.snippet.channelTitle} channelId={number.snippet.channelId}
            imageUrl={number.snippet.thumbnails.default.url} />
    );
    return (
        <>{listItems}</>
    );
}

class SearchData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };
        this.handleClick = this.handleClick.bind(this);
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

    callBackendAPI = async (searchValue) => {
        const response = await fetch('/videos/search', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            //make sure to serialize your JSON body
            body: JSON.stringify({
                searchInput: searchValue,
            })
        });
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };


    render() {
        const divStyle = {
            margin: '40px',
            border: '5px solid grey'
        };

        const searchBarStyle={
            margin:'20%',
            marginTop:'1%',
            marginBottom:'0'
        }

        const headerStyle = {
            padding: '5px 8px',
            background: '#188be2',
            color: '#f1f1f1',
            height:'50px'
        }

        const headerContent={
            padding:'0',
            margin:'0'
        }

        let isSearchResultAvailable = this.state.data != null ? true : false;

        if (isSearchResultAvailable) {
            return (
                <div className="App">
                    <input type="text" id="searchInput" class="form-control" placeholder="Enter video title to search" />
                    <button type="submit" class="btn btn-default" onClick={this.handleClick}>Search Videos</button>

                <div style={divStyle}>
                    <div class="header" id="myHeader" style={headerStyle}>
                        <h2 style={headerContent}>Search Result</h2>
                    </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Preview</th>
                                <th>Title</th>
                                <th>URL</th>
                                <th>ChannelId</th>
                            </tr>
                        </thead>
                        <tbody>
                            <NumberList1 value={this.state.data}></NumberList1>
                        </tbody>
                    </table>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="App" style={searchBarStyle}>
                    <input type="text" id="searchInput" class="form-control" placeholder="Enter video title to search" />
                    <button type="submit" class="btn btn-default" onClick={this.handleClick}>Search Videos</button>
                </div>
            );
        }
    }
}

export default SearchData;