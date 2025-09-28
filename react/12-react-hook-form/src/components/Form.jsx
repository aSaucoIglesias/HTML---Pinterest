import { useForm } from "react-hook-form"


export default function App() {

    const {
        register,
        handleSubmit,
        formState,
    } = useForm({
        defaultValues: {
            superhero: '',
            superpower: ''
        }
    })

    const onSubmit = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="superhero">Nombre del superhéroe</label>
                <input
                    {...register("superhero", {
                        required: {
                            value: true,
                            massage : "Necesitas un nombre de superheroe para continuar"
                        }

                    })}
                    type="text"
                    id="superhero"
                />
                {formState.errors.superhero ? 
                    <p>Tienes que rellenar el campo</p>
                    : null
                }
            </div>
            <div>
                <label htmlFor="superpower">Cual es tu superpoder</label>
                <input
                    {...register("superpower", {
                        required: true

                    })}
                    type="text"
                    id="superpower"
                />
            </div>
            <input type="submit" disabled={!formState.isDirty} />
        </form>
    )
}