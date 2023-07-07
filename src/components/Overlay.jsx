const Overlay = ({ projectSrc, onClose }) => {
    return (
        <div
            style={{
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: '9999',
            }}
            onClick={onClose}
        >
            <button
                title="Close"
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '25px',
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    fontSize: '42px',
                    fontWeight: 'semibold',
                    cursor: 'pointer',
                }}
                onClick={onClose}
            >
                &times;
            </button>
            <img
                src={projectSrc}
                alt="Fullsize"
                style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }}
            />
        </div>

    );
};

export default Overlay;

// <div
// style={{
//     position: 'fixed',
//     top: '0',
//     left: '0',
//     right: '0',
//     bottom: '0',
//     backgroundColor: 'rgba(0, 0, 0, 0.8)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: '9999',
// }}
// onClick={onClose}
// >
// <img
//     src={projectSrc}
//     alt="Fullsize"
//     style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }}
// />
// </div>
