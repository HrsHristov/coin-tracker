export default function Delete() {
    return (
        <>
            <div className="modal-dialog delete-modal d-flex-column gap-4">
                <div>Remove this entry?</div>
                <div className="d-flex-center-content gap-4">
                    <button type="submit" className="secondary-button px-5">
                        Remove
                    </button>
                    <button type="submit" className="primary-button px-5">
                        Cancel
                    </button>
                </div>
            </div>
        </>
    );
}
