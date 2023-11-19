export default function DeleteModal({ onClose, onDelete }) {
    return (
        <>
            <div className="app-modal">
                <div className="app-modal-content d-flex-column gap-4 text-center">
                    <div>Are you sure you want to delete this entry?</div>
                    <div className="d-flex-center-content gap-4">
                        <button
                            type="submit"
                            className="primary-button px-5"
                            onClick={onDelete}
                        >
                            Delete
                        </button>
                        <button
                            type="submit"
                            className="secondary-button px-5"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
