import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/modal/modalSlice";
import { useEffect } from "react";
// import { selectModalData } from "../../../redux/modal/modalSelectors";
import { StyledModal } from "./Modal.styled";

const ModalWrapper = ({ title, isOpen, children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("useEffect для Escape");
        const handleKeyDown = (event) => {
            if (event.code === "Escape") {
                dispatch(closeModal());
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [dispatch, isOpen, title, children]);

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            dispatch(closeModal());
        }
    };

    return (
        isOpen && (
            <StyledModal onClick={handleOverlayClick}>
                <div className="modal">
                    <button
                        onClick={() => dispatch(closeModal())}
                        className="closeBtn"
                    >
                        &times;
                    </button>
                    <h2>{title}</h2>
                    {children}
                </div>
            </StyledModal>
        )
    );
};

export default ModalWrapper;
