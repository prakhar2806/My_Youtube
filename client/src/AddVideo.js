import React, { Component } from 'react';


class AddVideo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            channelId: null,
        };
        this.addVideo = this.addVideo.bind(this);
        this.exitModal = this.exitModal.bind(this);
    }

    addVideo() {
        let videoName = document.getElementById("title").value;
        let videoUrl = document.getElementById("url").value;
        let channelId = document.getElementById("cId").value;

        this.callBackendAPI_AddVideo(videoName, videoUrl, channelId)
            .then(res => {
                this.setState({ data: res });
                this.exitModal();
            })
            .catch(err => console.log(err));
    }

    callBackendAPI_AddVideo = async (videoName, videoUrl, channelId) => {
        const response = await fetch('/videos/addVideo', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: videoName,
                url: videoUrl,
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
        document.getElementById("closeModelBtn").click();
    }


    render() {

        const buttonhidden = {
            display: 'none'
        }

        return (
            <div className="App" >
                <div class="text-center">
                    <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalSubscriptionForm1">Add New Video</a>
                </div>
                <div class="modal fade" id="modalSubscriptionForm1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header text-center">
                                <h4 class="modal-title w-100 font-weight-bold">Add New Video</h4>
                                <button type="button" id="closeModelBtn" class="close" data-dismiss="modal" aria-label="Close" style={buttonhidden}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div class="modal-body mx-3">
                                <div class="md-form mb-5">
                                    <i class="fas fa-user prefix grey-text"></i>
                                    <input type="text" id="title" class="form-control validate" placeholder="Enter video title" />
                                    <label data-error="wrong" data-success="right" for="title">Video Title</label>
                                </div>

                                <div class="md-form mb-4">
                                    <i class="fas fa-envelope prefix grey-text"></i>
                                    <input type="email" id="url" class="form-control validate" placeholder="Enter Url" />
                                    <label data-error="wrong" data-success="right" for="url">URL</label>
                                </div>

                                <div class="md-form mb-4">
                                    <i class="fas fa-envelope prefix grey-text"></i>
                                    <input type="email" id="cId" class="form-control validate" placeholder="Enter ChannelId" />
                                    <label data-error="wrong" data-success="right" for="cId">ChannelId</label>
                                </div>
                            </div>

                            <div class="modal-footer d-flex justify-content-center">
                                <button class="btn btn-indigo" onClick={this.addVideo}>Save Video <i class="fas fa-paper-plane-o ml-1"></i></button>
                                <button class="btn btn-indigo" onClick={this.exitModal}> Cancel <i class="fas fa-paper-plane-o ml-1"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

};

export default AddVideo;