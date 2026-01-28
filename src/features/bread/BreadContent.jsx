import { useSelector } from 'react-redux';
import { breadData } from './breadData';

export default function BreadContent() {
    const selectedBread = useSelector(state => state.bread.selectedBread);
    const bread = breadData[selectedBread];

    return (
        <div className="breadContent">
            <div className="imgBlock">
                <img src={bread.image} alt={selectedBread} className="imgBlock__breadImg" />
            </div>
            <div className="text">
                <h2>{bread.name}</h2>
                <p>{bread.description}</p>
            </div>
        </div>
    );
}
