import cross from "../assets/cross.png";

export default function EntryInfoModal() {
    return (
        <div className="app-modal">
            <div className="app-modal-content d-flex-column gap-4 add-modal-position">
                <div className="modal-title">
                    <span>Transaction Details</span>
                    <img src={cross} width="18" height="18" />
                </div>
                <div className="modal-content">
                    <div className="d-flex-between-content px-3">
                        <span className="secondary-text-color">Type</span>
                        <span>Buy</span>
                    </div>
                    <div className="divider my-3"></div>
                    <div className="d-flex-between-content px-3">
                        <span className="secondary-text-color">Date</span>
                        <span>Dec 24, 2022, 11:20PM</span>
                    </div>
                    <div className="divider my-3"></div>
                    <div className="d-flex-between-content px-3">
                        <span className="secondary-text-color">
                            Price per coin
                        </span>
                        <span>$8.9970</span>
                    </div>
                    <div className="divider my-3"></div>
                    <div className="d-flex-between-content px-3">
                        <span className="secondary-text-color">Quantity</span>
                        <span>10ATOM</span>
                    </div>
                    <div className="divider my-3"></div>
                    <div className="d-flex-between-content px-3">
                        <span className="secondary-text-color">Fees</span>
                        <span>$0.09</span>
                    </div>
                    <div className="divider my-3"></div>
                    <div className="d-flex-between-content px-3">
                        <span className="secondary-text-color">
                            Total Spent
                        </span>
                        <span>$90.06</span>
                    </div>
                    <div className="divider my-3"></div>
                    <div className="d-flex-column px-3">
                        <span className="secondary-text-color">Notes</span>
                        <span>-</span>
                    </div>
                    <div className="divider my-4"></div>
                </div>
            </div>
        </div>
    );
}
