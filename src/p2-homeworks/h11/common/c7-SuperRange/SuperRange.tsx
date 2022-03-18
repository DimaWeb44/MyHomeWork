import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import InputRange from "react-input-range";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    setValue1: (value: number) => void
    value1:number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,
        setValue1,
        value1,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) // сохраняем старую функциональность
        onChangeRange && onChangeRange(+e.currentTarget.value)
        setValue1(+e.currentTarget.value)
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`
    return (
        <>
            <input
                value={value1}
                type={'range'}
                onChange={onChangeCallback}
                className={finalRangeClassName}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
        </>
    )
}

export default SuperRange
