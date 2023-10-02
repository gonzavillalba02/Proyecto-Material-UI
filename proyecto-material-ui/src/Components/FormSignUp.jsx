import { useState } from "react"
import Button from "@mui/material/Button"
import { TextField, Switch, FormGroup, FormControlLabel, useThemeProps } from "@mui/material"

function FormSignUp (props) {

    const { handleSubmit } = props

    const [name,setName] = useState("")
    //useEffect(() => { //obviamente habria que importarlo para usarlo
    //    console.log(name)
    //},[name])//cada vez que detecte un cambio dentro de name (por setName), hara tal cosa. Asi podemos ver el valor real de nuestro estado
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [prom, setProm] = useState(true)
    const [nov, setNov] = useState(true)

    const [errors, setErrors] = useState({
        name: {
            error: false,
            helperText: "Deben ser al menos 3 caracteres"
        }
    })

    const validarNombre = (nombre) => {
        if(nombre.length >= 3){
            return { name: {
                error: false,
                helperText: ""
            } }
        }else{
            return { name: {
                error: true,
                helperText: "Deben ser al menos 3 caracteres"
            } }
        }
    }

    return (
    <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit({
            name,
            lastName,
            email,
            prom,
            nov
        })
    }} >
        <TextField 
        id="name" 
        label="Nombre" 
        variant="outlined" 
        fullWidth 
        margin="normal"
        onChange={(e) => setName(e.target.value)}
        value={name}
        error={errors.name.error}
        helperText={errors.name.error ? errors.name.helperText : ""}
        onBlur={() => setErrors(validarNombre(name))}
        />

        <TextField 
        id="lastname" 
        label="Apellidos" 
        variant="outlined" 
        fullWidth 
        margin="normal"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        />

        <TextField 
        id="email" 
        label="Email" 
        variant="outlined" 
        fullWidth 
        margin="normal"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        />

        <FormGroup>
            <FormControlLabel 
                control={
                    <Switch 
                        onChange={(e) => {
                            setProm(e.target.checked)
                        }}
                    />
                }
                label="Promociones"
            />

            <FormControlLabel 
                control={
                    <Switch 
                        onChange={(e) => {
                            setNov(e.target.checked)
                        }}
                    />
                }
                label="Novedades"
            />
        </FormGroup>

        <Button variant="contained" type="submit">Registrarse</Button>
    </form>
    )
}

export default FormSignUp