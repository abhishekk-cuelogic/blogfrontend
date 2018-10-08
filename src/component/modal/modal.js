import React, { Component } from 'react';
import $ from 'jquery';

class Modal extends Component {

    componentDidMount = () => {
        $('#myModal').show("show");
    }

    render() {
        return (
            <div class="modal" id="myModal" role="dialog" data-backdrop="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <b>{this.props.res}</b>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default Modal;