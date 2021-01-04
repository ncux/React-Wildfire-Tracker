import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';
import classes from './marker.module.css';

export const Marker = ({ lat, lng, onClick }) => {

    return (
        <div className={`${classes.locationMarker}`} onClick={ onClick }>
            <Icon icon={ locationIcon } className={`${classes.icon}`} />
        </div>
    );

};

