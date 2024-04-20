import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/modal/modalSlice";
import { useEffect } from "react";
// import { selectModalData } from "../../../redux/modal/modalSelectors";
import { BtnClose, StyledModal } from "./Modal.styled";
import { useNavigate } from "react-router-dom";

const ModalWrapper = ({ title, isOpen, children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    const handleCloseModal = () => {
        dispatch(closeModal());
        navigate("/"); // Перенаправлення на сторінку "/"
    };

    return (
        isOpen && (
            <StyledModal onClick={handleOverlayClick}>
                <div className="modal">
                    <BtnClose onClick={handleCloseModal} />
                    {children}
                </div>
            </StyledModal>
        )
    );
};

export default ModalWrapper;
