import { useEffect, useRef, useState } from 'react';
import { Button } from '../Button';
import Slider from "react-slick";
import woman1 from '../../assets/woman-2.svg';
import woman2 from '../../assets/woman-1.svg';
import woman3 from '../../assets/woman-3.svg';
// import man from '../../assets/man-1.svg';
import circleArrow from '../../assets/circle-arrow.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data as dataPerson } from '../../data';
import styles from './sectionfifth.module.scss';

interface DataProps {
    id: number;
    description: string;
    name: string;
    position: string;
    img: string;
}

export function SectionFifth() {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: width <= 768 ? 1 : (width <= 1366 ? 3 : 4),
        slidesToScroll: 1,
        arrows: false,
        initialSlide: 5
    };

    const sliderRef = useRef<Slider>(null);

    const goToNext = () => {
        sliderRef.current?.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current?.slickPrev();
    };

    const [data, setData] = useState<DataProps[]>([]);

    useEffect(() => {
        setData(dataPerson)
    }, [])

    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.texts}>
                    <p className={styles.tag}>Join other Sun harvesters</p>
                    <h2 className={styles.title}>Make something awesome</h2>
                    <p className={styles.description}>Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.</p>
                </div>
                <Button yellow />
            </div>
            <div className={styles.cardContainer}>
                <Slider ref={sliderRef} {...settings}>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={item.id} className={styles.card}>
                                    <p className={styles.description}>
                                        {item.description}
                                    </p>
                                    <footer>
                                        <img src={index % 3 === 0 ? woman1 : index % 3 === 1 ? woman2 : woman3} alt="" />
                                        <div className={styles.author}>
                                            <p className={styles.name}>{item.name}</p>
                                            <p className={styles.position}>{item.position}</p>
                                        </div>
                                    </footer>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
            <div className={styles.contentButtons}>
                <img onClick={goToPrev} src={circleArrow} alt="" />
                <img onClick={goToNext} className={styles.arrow} src={circleArrow} alt="" />
            </div>
        </section>
    )
}