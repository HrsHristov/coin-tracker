import Modal from "../ModalWrapper";
import Button from "../../Button/Button";

export default function DeleteEntryModal({ onClose, onDelete }) {
    return (
        <Modal title="Delete">
            <p>Are you sure you want to delete this entry?</p>
            <div className="d-flex gap-4">
                <Button primary block onClick={onDelete}>
                    Delete
                </Button>
                <Button secondary block onClick={onClose}>
                    Cancel
                </Button>
            </div>
        </Modal>
    );
}
