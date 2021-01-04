import classes from './info-box.module.css';

export const InfoBox = ({ info }) => {

    const { id, title } = info;

    return (
        <div className={`${classes.locationInfo}`}>
            <h2>Event Location Info</h2>
            <ul className={`${classes.ul}`}>
                <li className={`${classes.li}`}>
                    <strong>ID:</strong> { id }
                </li>
                <li>
                    <strong>Title:</strong> { title }
                </li>
            </ul>
        </div>
    );

};
