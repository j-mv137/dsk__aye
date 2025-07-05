import { ContainerDown } from '../Utils/layout1'
import { OrderForm } from './orderForm'
import { SubmitHandler, useForm } from 'react-hook-form'

export interface FormTypeAdd {
  type: 'taller' | 'revision'
  name: string
  description?: string
  address?: string
  phoneNum?: string
}

export const OrdersLayout = (): React.JSX.Element => {
  const { register, handleSubmit } = useForm<FormTypeAdd>()

  const onSubmit: SubmitHandler<FormTypeAdd> = (data): void => {
    console.log(data)
  }

  return (
    <ContainerDown>
      <OrderForm register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} />
    </ContainerDown>
  )
}
