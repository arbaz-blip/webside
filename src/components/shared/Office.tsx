import { Card } from 'react-bootstrap';
import { Office } from 'pages/contact/types';
import FeatherIcon from 'feather-icons-react';

type OfficeProps = {
    office: Office;
};

type MyStyles = {
    position?: string;
    inset: string;
    background: string;
    height: string;
    zIndex: string;
    top: string;
};

const OfficeCard = ({ office }: OfficeProps) => {
    const cardOverlayBottomStyle: MyStyles = {
        position: 'absolute',
        inset: '0',
        background: 'linear-gradient(to bottom, transparent, #000)',
        height: '250px',
        zIndex: '1',
        top: 'auto',
    };

    const pullUpText = {
        positon: 'relative',
        zIndex: '10',
    };

    const cardStyle = {
        background: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url('${office.image}')`,
    };

    return (
        <Card className="card-listing-item" style={cardStyle}>
            <div className="card-img-top-overlay">

                <Card.Img src={office.image} alt="Card Image" variant="top" />
                <div style={cardOverlayBottomStyle as React.CSSProperties}></div>
                <div className="card-overlay-bottom" style={pullUpText}>
                    <h2 className="text-white">{office.title}</h2>
                    <div className="d-flex mb-3 align-items-center">
                        <div className="list-inline-item me-3 flex-shrink-0">
                            <FeatherIcon icon="map-pin" className="icon-dual-primary" />
                        </div>
                        <p className="fw-medium fs-16 text-white mb-0">{office.address}</p>
                    </div>

                    <div className="d-flex mb-3 align-items-center">
                        <div className="list-inline-item me-3 flex-shrink-0">
                            <FeatherIcon icon="phone" className="icon-dual-primary" />
                        </div>
                        <p className="fw-medium fs-16 text-white mb-0">{office.phone}</p>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default OfficeCard;
