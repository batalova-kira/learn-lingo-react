import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/modal/modalSlice";
import { useEffect } from "react";
// import { selectModalData } from "../../../redux/modal/modalSelectors";
import { BtnClose, StyledModal } from "./Modal.styled";
import { useNavigate } from "react-router-dom";

const ModalWrapper = ({
    title,
    isOpen,
    children,
    navigateTo,
    modalWidth,
    modalHeight,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
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

    const handleCloseModal = () => {
        dispatch(closeModal());
        if (navigateTo === "/teachers") {
            navigate("/teachers");
        } else {
            navigate("/");
        } // Перенаправлення на сторінку "/"
    };

    return (
        isOpen && (
            <StyledModal onClick={handleOverlayClick}>
                <div
                    className="modal"
                    style={{ maxWidth: modalWidth, maxHeight: modalHeight }}
                >
                    <BtnClose onClick={handleCloseModal} />
                    {children}
                </div>
            </StyledModal>
        )
    );
};

export default ModalWrapper;
