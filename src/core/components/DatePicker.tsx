import DatePicker from 'react-datepicker'
import { useController } from 'react-hook-form'

import 'react-datepicker/dist/react-datepicker.css'
import { CustomDatePickerWrapper, CustomDatePickerInput } from './styles'

interface DatePickerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any
  name: string
  placeholder: string
}

const YearPicker: React.FC<DatePickerProps> = ({
  control,
  name,
  placeholder,
}) => {
  const {
    field: { value, onChange, onBlur },
  } = useController({
    name,
    control,
  })

  return (
    <CustomDatePickerWrapper>
      <DatePicker
        selected={value}
        onChange={onChange}
        onBlur={onBlur}
        dateFormat="yyyy"
        showYearPicker
        placeholderText={placeholder}
        customInput={<CustomDatePickerInput />}
      />
    </CustomDatePickerWrapper>
  )
}

export default YearPicker
