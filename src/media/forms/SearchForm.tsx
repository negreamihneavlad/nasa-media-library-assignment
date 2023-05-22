import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { StyledSearchForm, ClearButton } from './styles'
import { DatePicker } from '../../core/components'
import { Input, Button } from '../../core/components/styles'

export interface IFormValues {
  query: string
  yearStart?: Date
  yearEnd?: Date
}

interface InitialValues {
  query: string | undefined
  yearStart: Date | undefined
  yearEnd: Date | undefined
}

interface SearchFormProps {
  onSubmit: (values: IFormValues) => void
  reset: () => void
  initialValues: InitialValues
}

const SearchForm: React.FC<SearchFormProps> = (props) => {
  const schema = yup.object({
    query: yup.string().required('Required'),
    yearStart: yup.string(),
    yearEnd: yup.string(),
  })

  const {
    handleSubmit,
    register,
    control,
    formState: { isValid },
    setValue,
  } = useForm<IFormValues>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: props.initialValues,
  })

  const onSubmit = (data: IFormValues) => {
    props.onSubmit({
      query: data.query,
      yearStart: data.yearStart,
      yearEnd: data.yearEnd,
    })
  }

  const onReset = () => {
    setValue('query', '')
    setValue('yearStart', undefined)
    setValue('yearEnd', undefined)
    props.reset()
  }

  return (
    <StyledSearchForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          {...register('query')}
          type="text"
          placeholder="Search media..."
        />
      </div>
      <DatePicker
        control={control}
        name="yearStart"
        placeholder="Select start year"
      />
      <DatePicker
        control={control}
        name="yearEnd"
        placeholder="Select end year"
      />

      <Button type="submit" disabled={!isValid}>
        Search
      </Button>
      <ClearButton onClick={onReset}>Clear</ClearButton>
    </StyledSearchForm>
  )
}

export default SearchForm
