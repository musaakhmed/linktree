const Backdrop = ({
    onClose,
    popupOpen,
}: {
    onClose: any
    popupOpen: boolean
}) => {
    if (!popupOpen) return null
    return (
        <div
            onClick={onClose}
            className='fixed inset-0 bg-slate-900 bg-opacity-50 backdrop-blur-sm z-20'
        ></div>
    )
}

export default Backdrop
