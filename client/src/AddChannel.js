import React, { Component } from 'react';


class AddChannel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            channelId: null,
        };
        this.createChannel = this.createChannel.bind(this);
        this.exitModal = this.exitModal.bind(this);

    }

    createChannel() {
        let channelName = document.getElementById("form3").value;
        let channelId = document.getElementById("form2").value;

        this.callBackendAPI_AddChannel(channelName, channelId)
            .then(res => {
                this.setState({ data: res });
                this.exitModal();
            })
            .catch(err => console.log(err));
    }

    callBackendAPI_AddChannel = async (channelName, channelId) => {
        const response = await fetch('/videos/addChannel', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            //make sure to serialize your JSON body
            body: JSON.stringify({
                name: channelName,
                channelId: channelId
            })
        });

        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    exitModal() {
        document.getElementById("closeModelBtn_1").click();
    }
    


    render() {

        const buttonhidden={
            display:'none'
        }

        return (
            <div className="App" >
                <div class="text-center">
                    <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalSubscriptionForm">Add New Channel</a>
                </div>

                <div class="modal fade" id="modalSubscriptionForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header text-center">
                                <h4 class="modal-title w-100 font-weight-bold">Add New Channel</h4>
                                <button type="button" id="closeModelBtn_1" class="close_1" data-dismiss="modal" aria-label="Close" style={buttonhidden}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body mx-3">
                                <div class="md-form mb-5">
                                    <i class="fas fa-user prefix grey-text"></i>
                                    <input type="text" id="form3" class="form-control validate" placeholder="Enter Channel Name" />
                                    <label data-error="wrong" data-success="right" for="form3">Channel Name</label>
                                </div>

                                <div class="md-form mb-4">
                                    <i class="fas fa-envelope prefix grey-text"></i>
                                    <input type="email" id="form2" class="form-control validate" placeholder="Enter ChannelId" />
                                    <label data-error="wrong" data-success="right" for="form2">ChannelId</label>
                                </div>

                            </div>

                            <div class="modal-footer d-flex justify-content-center">
                                <button class="btn btn-indigo" onClick={this.createChannel}>Save Channel <i class="fas fa-paper-plane-o ml-1"></i></button>
                                <button class="btn btn-indigo" onClick={this.exitModal}> Cancel <i class="fas fa-paper-plane-o ml-1"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};

export default AddChannel;