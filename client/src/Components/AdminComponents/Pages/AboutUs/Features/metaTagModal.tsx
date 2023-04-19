import React from "react";
import Modal from 'react-bootstrap/Modal';
import ClearIcon from '@mui/icons-material/Clear';
type metaProps = {
  show : boolean
  onHiding : ()=>void
  title : string 
  description : string
  handleMetaData : ()=>void
  handleDescription : (e:React.ChangeEvent<HTMLTextAreaElement>)=> void
  handleTitle :(e : React.ChangeEvent<HTMLTextAreaElement>)=> void
}
function MetaTagModal(props :metaProps){
    return(
        <Modal show={props.show} onHide={props.onHiding} backdrop="static" keyboard={false} centered>
                    <Modal.Body style={{ overflow: 'auto' }} >

                        <div className='backgroundButton' >
                            <h5 style={{ marginLeft: 80 }}>Change Meta Tag for About Us</h5>
                            <div onClick={props.onHiding} className='metaTagButton'><ClearIcon /></div>
                        </div>

                        <div className='backgroundButton' style={{ marginTop: 10 }}>
                            <label style={{ marginTop: 30 }}>Title : </label>
                            <textarea className='form-control' style={{ width: 'auto', marginLeft: 'auto', fontSize: 14 }} rows={3} cols={47} value={props.title} onChange={props.handleTitle}></textarea >
                        </div>

                        <div className='backgroundButton' style={{ marginTop: 10 }}>
                            <label style={{ marginTop: 30 }}>Description : </label>
                            <textarea className='form-control' style={{ width: 'auto', marginLeft: 'auto', fontSize: 14 }} rows={8} cols={47} value={props.description} onChange={props.handleDescription}></textarea >
                        </div>

                        <button type="button" className='btn btn-primary' style={{ marginLeft: 400, marginTop: 20, height: 'auto', fontSize: 13, width: 'auto' }} onClick={props.handleMetaData}>Update</button>
                    </Modal.Body>
                </Modal>
    )
}
export default MetaTagModal;