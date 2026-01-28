import { useDispatch, useSelector } from 'react-redux';
import { selectBread } from '../../features/bread/breadSlice';

export default function Header() {
    const dispatch = useDispatch();
    const selectedBread = useSelector(state => state.bread.selectedBread);

    const breads = [
        'Rustic Sourdough',
        'Golden Grain',
        'Soft Wheat',
        'Bakery Classic',
        'Baguette'
    ];

    return (
        <nav>
            <div className="main">
                <img className="main__breadImg" src="public\image\bread.png" alt="" />
            </div>
            <div className="header">
                {breads.map((bread, index) => (
                    <div
                        key={index}
                        className={`header__button${index + 1} header_button ${selectedBread === bread ? 'header_button--active' : ''}`}
                        onClick={() => dispatch(selectBread(bread))}
                    >
                        {bread}
                    </div>
                ))}
            </div>
        </nav>
    );
}
