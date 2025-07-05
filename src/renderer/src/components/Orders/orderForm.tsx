import { SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { Button } from '../Utils/Button/button'
import { Input } from '../Utils/Input/input'
import styles from './orderForm.module.css'
import { FormTypeAdd } from './ordersLayout'

interface OrderFormProps {
  register: UseFormRegister<FormTypeAdd>
  handleSubmit: UseFormHandleSubmit<FormTypeAdd>
  onSubmit: SubmitHandler<FormTypeAdd>
}

const phoneRe = /[0-9 ]/

export const OrderForm = ({
  register,
  handleSubmit,
  onSubmit
}: OrderFormProps): React.JSX.Element => {
  return (
    <div className={styles.secondContainer}>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.radioInputs}>
            <div className={styles.radioGroup}>
              <div className={styles.radioGroup}>
                <label htmlFor="radio">Taller</label>
                <input {...register('type', { required: true })} value="taller" type="radio" />
              </div>
            </div>

            <div className={styles.radioGroup}>
              <label htmlFor="radio">Revisión</label>
              <div className={styles.radioContainer}>
                <input
                  {...register('type', { required: true, pattern: phoneRe })}
                  value="revisión"
                  type="radio"
                />
              </div>
            </div>
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="name">Nombre del cliente*</label>
            <Input {...register('name', { required: true })} className={styles.inputForm} />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="address">Domicilio</label>
            <Input {...register('address', { required: false })} className={styles.inputForm} />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="phoneNum">Teléfono</label>
            <Input
              {...register('phoneNum', { required: false })}
              className={styles.inputForm}
              type="number"
            />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="phoneNum">Descripción</label>
            <textarea {...register('phoneNum', { required: false })} className={styles.textarea} />
          </div>
          <Button type="submit">Añadir</Button>
        </form>
      </div>
    </div>
  )
}
