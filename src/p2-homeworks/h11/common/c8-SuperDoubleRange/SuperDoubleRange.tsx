import {ChangeEvent, FC, useCallback, useEffect, useRef} from "react";
import classnames from "classnames";
import "./SuperDoubleRange.css";

interface SuperDoubleRangePropsType {
    min: number;
    max: number;
    onChange: Function;
    value1: number;
    value2: number;
    setValue1: Function;
    setValue2: Function;
}

const SuperDoubleRange: FC<SuperDoubleRangePropsType> = ({
                                                             value1,
                                                             value2,
                                                             setValue1,
                                                             setValue2,
                                                             min,
                                                             max,
                                                             onChange
                                                         }) => {
    const minValRef = useRef<HTMLInputElement>(null);
    const maxValRef = useRef<HTMLInputElement>(null);
    const range = useRef<HTMLDivElement>(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(value1);
            const maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [value1, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(value2);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [value2, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({min: value1, max: value2});
    }, [value1, value2, onChange]);
    if (!(value1 < value2)) setValue2(value2 + 1)
    return (
        <div className="container">
            <input
                type="range"
                min={min}
                max={max}
                value={value1}
                ref={minValRef}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.min(+event.target.value, value2 - 1);
                    setValue1(value);
                    event.target.value = value.toString();
                }}
                className={classnames("thumb thumb--zindex-3", {
                    "thumb--zindex-5": value1 > max - 100
                })}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={value2}
                ref={maxValRef}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.max(+event.target.value, value1 + 1);
                    setValue2(value);
                    event.target.value = value.toString();
                }}
                className="thumb thumb--zindex-4"
            />

            <div className="slider">
                <div className="slider__track"></div>
                <div ref={range} className="slider__range"></div>
                <span className="slider__left-value">{value1}</span>
                <span className="slider__right-value">{value2}</span>
            </div>
        </div>
    );
};

export default SuperDoubleRange;