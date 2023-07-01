import { createPortal } from "react-dom";

import ModalBox from "../components/ModalBox";

function BackDrop({
    setShowModal,
}: {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <div
            className="h-[100%] w-[100%] fixed flex justify-center left-0"
            style={{
                backgroundColor: "rgba(0,0,0,0.65)",
            }}
        >
            <div
                style={{
                    animation: "slide-in 250ms ease-out forwards",
                }}
                className="z-10 fixed top-44 w-[100%]"
            >
                <ModalBox setShowModal={setShowModal} />
            </div>
        </div>
    );
}

export default function CartModal({
    setShowModal,
}: {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return createPortal(
        <BackDrop setShowModal={setShowModal} />,
        document.getElementById("modal-root") as HTMLDivElement
    );
}
