export default function Delete() {
    return (
        <>
            <div className="app-modal">
                <div className="app-modal-content d-flex-column gap-4 text-center">
                    <div>Are you sure you want to delete this entry?</div>
                    <div className="d-flex-center-content gap-4">
                        <button type="submit" className="primary-button px-5">
                            Remove
                        </button>
                        <button type="submit" className="secondary-button px-5">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
