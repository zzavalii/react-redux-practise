import { FaInstagram, FaFacebookF, FaTelegramPlane } from 'react-icons/fa';

export default function Footer () {

    return (
        <>
            <div className="gridblock">
                <div className="gridblock__description box">
                    <p>Хліб, створений з повагою до традицій та любов’ю до смаку.</p>
                </div>
                <div className="gridblock__fermentation box">
                    <p>Ми використовуємо натуральну закваску та повільне бродіння.</p>
                    <div className="socials">
                        <FaInstagram />
                        <FaFacebookF />
                        <FaTelegramPlane />
                    </div>
                </div>
                <div className="gridblock__three box"></div>
                <div className="gridblock__copyright box">
                    &copy; 2012-2026 Bread Agency
                </div>
                <div className="gridblock__privacy box">
                    <p>Privacy policy</p>
                </div>
                <div className="gridblock__empty box"></div>
            </div>
        </>
    )
}